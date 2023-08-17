import { createInjectionKey } from '../../_utils/create-injection-key'
import type { ConfigProviderInjection } from './internal-interface'

export const configProviderInjectionKey =
  createInjectionKey<ConfigProviderInjection>('b-config-provider')
