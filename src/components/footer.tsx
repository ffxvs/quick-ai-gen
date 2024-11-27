import { FaGithub } from 'react-icons/fa'
import { HStack, Link } from '@chakra-ui/react'

export default function Footer() {
    return (
        <HStack fontSize="sm">
            <Link href="https://github.com/ffxvs/quick-ai-gen" target="_blank" fontWeight="600">
                <FaGithub/> GitHub
            </Link>
        </HStack>
    )
}
