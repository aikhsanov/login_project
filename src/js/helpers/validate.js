const regExpDic = {
  email:
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/,
  phone: /^\d{11}$/,
  date_of_birth_day: /^[1-2][0-9]$|^3[0-1]$|^0[1-9]$|^[1-9]$/,
  date_of_birth_month: /^[1-9]|0[1-9]|1[0-2]$/,
  date_of_birth_year: /^\d{4}$/,
};

/**
 * Function validate. Check Input on RegExp provided in regExpDic by input data-required type
 * @param {HTMLInputElement} el
 * @returns {Boolean} - Return true if input is valid or doesn't have a data-req attr
 */
export function validate(el) {
  const regExpName = el.dataset.required;
  console.log(regExpName);

  if (!regExpDic[regExpName]) return true;
  return regExpDic[regExpName].test(el.value);
}
