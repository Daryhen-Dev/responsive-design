import { create } from 'zustand'
import { Dark, Light } from './themes'

export const useThemeStore = create((set, get) => ({
        theme: 'light',
        themeStyle: Light,
        setTheme: () => {
            const {theme} = get()
            set({theme: theme === 'light' ? 'dark' : 'light'})
            set({themeStyle: theme === 'light' ? Dark : Light})
        }
  }))