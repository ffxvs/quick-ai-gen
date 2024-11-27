import { Box, Heading, HStack } from '@chakra-ui/react'
import { BsFillLightningChargeFill } from 'react-icons/bs'

export default function Header() {
    return (
        <HStack>
            <Box fontSize={{base: 'lg', sm: '2xl'}} color="orange.500">
                <BsFillLightningChargeFill/>
            </Box>
            <Heading size={{base: 'md', sm: 'xl'}} letterSpacing="tight">
                Quick AI Image Generator
            </Heading>
        </HStack>
    )
}