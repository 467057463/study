export const delay = 
  (ms = 1000, message = 'delay') => new Promise((resolve) => setTimeout((() => resolve(message)), ms))

export const version = '1.0.0';