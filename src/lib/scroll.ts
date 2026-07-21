export function getHeaderScrollOffset() {
  const navRow = document.querySelector<HTMLElement>("[data-header-offset]");
  return (navRow?.offsetHeight ?? 80) + 16;
}
