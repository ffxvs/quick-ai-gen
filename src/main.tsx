import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DevSupport } from '@react-buddy/ide-toolbox'
import { ComponentPreviews, useInitial } from './dev'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider value={defaultSystem}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                <DevSupport
                    ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
                >
                    <App/>
                </DevSupport>
            </ThemeProvider>
        </ChakraProvider>
    </React.StrictMode>
)