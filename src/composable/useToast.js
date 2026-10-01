import emitter from '@/emitter'

export function useToast(msg, type = 'success', delay = 6000) {
  emitter.emit('toast', { message: msg, type: type, delay: delay })
}
