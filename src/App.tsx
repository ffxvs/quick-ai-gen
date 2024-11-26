import { Box, ClientOnly, Skeleton, VStack } from '@chakra-ui/react'
import { ThemeToggle } from './components/theme-toggle'
import Header from './components/header'
import MainPage from './components/main-page'
import { Toaster } from './components/ui/toaster'

export default function Page() {
    return (
        <Box paddingY="24px">
            <VStack>
                <Header/>
                <MainPage/>
                <Box pos="absolute" top="4" right="4">
                    <ClientOnly fallback={<Skeleton width="10" height="10" rounded="md"/>}>
                        <ThemeToggle/>
                    </ClientOnly>
                </Box>
                <Toaster/>
            </VStack>
        </Box>
    )
}
