export const getLocalStorage = (name) => {
  let items = JSON.parse(localStorage.getItem(name));

  if (!items) return [];

  return items;
};

export const setLocalStorage = (name, items) => {
  localStorage.setItem(name, JSON.stringify(items));
};
