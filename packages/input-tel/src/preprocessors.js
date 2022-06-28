import { formatPhoneNumber, getFormatCountryCodeStyle } from './formatters.js';
import { PhoneUtilManager } from './PhoneUtilManager.js';

/**
 * @typedef {import('../types').RegionCode} RegionCode
 * @typedef {import('awesome-phonenumber').PhoneNumberFormat} PhoneNumberFormat
 * @typedef {* & import('awesome-phonenumber').default} AwesomePhoneNumber
 */

/**
 * @param {string} viewValue
 * @param {object} options
 * @param {RegionCode} options.regionCode
 * @param {string} options.prevViewValue
 * @param {number} options.currentCaretIndex
 * @param {PhoneNumberFormat} options.formatStrategy
 * @param {string?} [options.formatCountryCodeStyle='default']
 * @returns {{viewValue:string; caretIndex:number;}|undefined}
 */
export function liveFormatPhoneNumber(
  viewValue,
  { regionCode, formatStrategy, prevViewValue, currentCaretIndex, formatCountryCodeStyle },
) {
  const diff = viewValue.length - prevViewValue.length;
  // Do not format when not loaded
  if (diff <= 0 || !PhoneUtilManager.isLoaded) {
    return undefined;
  }

  // eslint-disable-next-line prefer-destructuring
  const PhoneNumber = /** @type {AwesomePhoneNumber} */ (PhoneUtilManager.PhoneUtil);
  const ayt = PhoneNumber.getAsYouType(regionCode);

  for (const char of viewValue) {
    if (char !== '') {
      ayt.addChar(char);
    }
  }

  let parenthesesAdded = false;
  let newViewValue = formatPhoneNumber(ayt.number(), { regionCode, formatStrategy });
  if (formatCountryCodeStyle === 'parentheses' && regionCode && !newViewValue.includes(`(`)) {
    newViewValue = getFormatCountryCodeStyle(newViewValue, { regionCode, formatCountryCodeStyle });
    parenthesesAdded = true;
  }

  /**
   * Given following situation:
   * - viewValue: `+316123`
   * - currentCaretIndex: 2 (inbetween 3 and 1)
   * - prevViewValue `+36123` (we inserted '1' at position 2)
   * => we should get `+31 6123`, and new caretIndex should be 3, and not newViewValue.length
   */
  const countryCode = PhoneUtilManager?.PhoneUtil?.getCountryCodeForRegionCode(regionCode);
  const diffBetweenNewAndCurrent = newViewValue.length - viewValue.length;
  let newCaretIndex = currentCaretIndex + diffBetweenNewAndCurrent;
  if (
    parenthesesAdded &&
    countryCode &&
    viewValue.length > countryCode.toString().length + 1 &&
    currentCaretIndex <= countryCode.toString().length + 1
  ) {
    newCaretIndex -= 2;
  }
  return newViewValue ? { viewValue: newViewValue, caretIndex: newCaretIndex } : undefined;
}
