import { useEffect, useMemo } from "react";
import { useEvent } from "../utils/useEvent";
import { debounce } from "../utils/Debounce";
import { Throttle } from "../utils/Throttle";

export function useDebounce<Fn extends (...args: any[]) => any>(
  fn: Fn,
  ms: number
) {
  const memoizedFn = useEvent(fn);

  const debounceFn = useMemo(
    () =>
      debounce((...args: Parameters<Fn>) => {
        memoizedFn(...args);
      }, ms),
    [ms]
  );

  // Clean up
  useEffect(
    () => () => {
      debounceFn.cancel();
    },
    [debounceFn]
  );

  return debounceFn;
}

export function useRafThrottle<Fn extends (...args: any[]) => any>(fn: Fn) {
  const memoizedFn = useEvent(fn);

  const throttledFn = useMemo(
    () =>
      Throttle((...args: Parameters<Fn>) => {
        memoizedFn(...args);
      }),
    []
  );

  // Clean up
  useEffect(
    () => () => {
      throttledFn.cancel();
    },
    [throttledFn]
  );

  return throttledFn;
}
