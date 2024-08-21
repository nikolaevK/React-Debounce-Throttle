export function debounce<T extends (...args: any[]) => any>(fn: T, ms: number) {
  let timeoutId: number | null = null;

  function debounced(...args: Parameters<T>) {
    if (typeof timeoutId === "number") {
      console.log("cancel");
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, ms);
  }

  debounced.cancel = () => {
    if (typeof timeoutId !== "number") {
      return;
    }
    clearTimeout(timeoutId);
  };

  return debounced;
}
