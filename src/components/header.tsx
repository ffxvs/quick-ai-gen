import { Box, Heading, HStack } from '@chakra-ui/react'
import { BsFillLightningChargeFill } from 'react-icons/bs'

export default function Header() {
    return (
        <HStack>
            <Box fontSize="2xl" color="orange.500">
                <BsFillLightningChargeFill/>
            </Box>
            <Heading size="xl" letterSpacing="tight">
                Quick AI Image Generator
            </Heading>
        </HStack>
    )
}