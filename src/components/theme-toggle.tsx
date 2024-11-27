import { IconButton } from '@chakra-ui/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
    const {theme, setTheme} = useTheme()

    function toggleThemeMode() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <IconButton size={{base: 'xs', sm: 'md'}} aria-label="toggle color mode" onClick={toggleThemeMode}>
            {theme === 'light' ? <Moon/> : <Sun/>}
        </IconButton>
    )
}
