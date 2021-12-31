import { createApp, nextTick } from 'vue'
import { isString } from '@vue/shared'
import LoadingVue from './Loading.vue'

import type { LoadingOptions, LoadingOptionsResolved } from './types'

// 生成 loading 组件实例
export function createLoadingComponent(options = {}) {
  const vm = createApp(LoadingVue, {
    loadingText: options.text
  }).mount(document.createElement('div'))

  return {
    vm,
    get $el(): HTMLElement {
      return vm.$el
    }
  }
}

// 渲染组件
export const Loading  = (
  options: LoadingOptions = {}
) => {
  const resolved: LoadingOptionsResolved = resolveOptions(options)
  const instance = createLoadingComponent(resolved);

  resolved.parent.appendChild(instance.$el);
  nextTick(() => (instance.vm.show()))
  return instance
}

// 解析参数
function resolveOptions(options: LoadingOptions):LoadingOptionsResolved {
  let target: HTMLElement
  if(isString(options.target)){
    target = document.querySelector<HTMLElement>(options.target) ?? document.body
  } else {
    target = options.target || document.body
  }
  return {
    parent: target,
    target,
    text: options.text || '',
    fullscreen: document.body === target
  }
}