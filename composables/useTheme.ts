import { useDark, useToggle } from '@vueuse/core'

export function useTheme() {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    storageKey: 'nbl-color-scheme',
    initialValue: 'dark', // dark by default
  })
  const toggleTheme = useToggle(isDark)
  return { isDark, toggleTheme }
}
