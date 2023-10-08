export default function debounce<T extends Function>(cb: T, wait = 20) {
  let h: any = 0;
  const callable = (...args: any) => {
    clearTimeout(h);
    // eslint-disable-next-line n/no-callback-literal
    h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
}