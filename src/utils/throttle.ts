export default function throttle<T extends (...args: any[]) => any>(func: T, delay: number) {
  let lastCall = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (!lastCall || now - lastCall >= delay) {
      func(...args);
      lastCall = now;
    }
  };
}
