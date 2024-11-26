import { IconButton } from '@chakra-ui/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
    const {theme, setTheme} = useTheme()
    const toggleThemeMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <IconButton aria-label="toggle color mode" onClick={toggleThemeMode}>
            {theme === 'light' ? <Moon/> : <Sun/>}
        </IconButton>
    )
}
