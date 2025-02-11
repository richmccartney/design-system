export const format = (first: any, middle: any, last: any): any => {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
}

export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow
}

export const renderHiddenInput = (
  always: boolean,
  container: HTMLElement,
  name: string,
  value: string | undefined | null,
  disabled: boolean
) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector(
      'input.aux-input'
    ) as HTMLInputElement | null
    if (!input) {
      input = container.ownerDocument!.createElement('input')
      input.type = 'hidden'
      input.classList.add('aux-input')
      container.appendChild(input)
    }
    input.disabled = disabled
    input.name = name
    input.value = value || ''
  }
}
