export type LoadingOptionsResolved = {
  parent: HTMLElement,
  target: HTMLElement,
  text: string,
  fullscreen: boolean
}

export type LoadingOptions = Partial<
  Omit<LoadingOptionsResolved, 'parent'> & {
    target: HTMLElement | string
  }
>