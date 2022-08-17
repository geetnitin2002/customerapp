/**
 * Checks a string is empty/null/undefined.
 * It is preferred to use this method as it checks all mandatory validations for a string.
 * @export
 * @param {*} string
 * @returns
 */
export function empty(string) {
  return string === null || string === undefined || string === "";
}

/**
 *Checks if a number is null/undefined or zero.
 *
 * @export
 * @param {*} number
 * @returns
 */
export function emptyOrZero(number) {
  return number === null || number === undefined || number === 0;
}

export function undefinedOrZero(array){
  return array === null || array === undefined || array.length === 0;
}

/**
 * Checks if an object is null or undefined.
 * It is the preferred way to do this as the check for an object is different that the string or a number.
 *
 * @export
 * @param {*} object
 * @returns
 */
export function undefinedOrNull(object) {
  return object === null || object === undefined;
}

/**
 * Checks if an object is null and undefined.
 * It is the preferred way to do this as the check for an object is different that the string or a number.
 *
 * @export
 * @param {*} object
 * @returns
 */
export function notUndefinedAndNull(object){
  return object !== null && object !== undefined;
}

/**
 * Checks if value contains only alphabets and digits
 *
 * @export
 * @param {*} string
 * @returns
 */
export function isSpecialCharacter(string){
  return string.match(/[A-Za-z0-9]+$/);
}

export function isWithinMinMax(value, min, max) {

  let valueLength = value.length;

  if(notUndefinedAndNull(min) && notUndefinedAndNull(max)){ 
    // if(nextProps.type === 'number'){
    //   valueLength = parseInt(nextProps.value);
    // }else{
      // valueLength = nextProps.value.length;
    // }

    if(valueLength < min || valueLength > max){
      return false;
    }else if(valueLength > max){
      return false;
    }else if(valueLength < min){
      return false;
    }
    return true;
  }

  return true;
}