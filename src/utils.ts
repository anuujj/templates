export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
export const throttle = (func, wait) => {
  let free = true;
  return function (...args) {
    if (free) {
      free = false;
      func.apply(this, args);
    }
    setTimeout(() => {
      free = true;
    }, wait);
  };
};
