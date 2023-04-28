// getSavedValueFromLocalStorage or getSavedValueFromLocalStorageByKey
const getSavedValue = (key, initialValue) => {
  let storageSupported = false;

  try {
    storageSupported = window.localStorage && true;
  } catch (e) {
    console.log(e);
  }

  const value = localStorage.getItem(key) ?? "";
  if (!value || !value.trim()) return initialValue; // added guard clause
  const savedValue = JSON.parse(value);
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

export default getSavedValue;
