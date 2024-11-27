import { Box, ClientOnly, Skeleton, VStack } from '@chakra-ui/react'
import { ThemeToggle } from './components/theme-toggle'
import Header from './components/header'
import MainPage from './components/main-page'
import { Toaster } from './components/ui/toaster'
import Footer from './components/footer'

export default function Page() {
    return (
        <Box paddingTop="24px">
            <VStack>
                <Box marginLeft="-16px">
                    <Header/>
                </Box>
                <MainPage/>
                <Box pos="absolute" top="4" right="4">
                    <ClientOnly fallback={<Skeleton width="10" height="10" rounded="md"/>}>
                        <ThemeToggle/>
                    </ClientOnly>
                </Box>
                <Box bottom="4" paddingY="16px">
                    <Footer/>
                </Box>
                <Toaster/>
            </VStack>
        </Box>
    )
}
