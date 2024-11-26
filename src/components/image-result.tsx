'use client'

import { Image } from '@chakra-ui/react'

export default function ImageResult({src}: { src: string }) {
    return (
        <Image boxSize={{base: '300px', md: '380px'}} fit="contain" bg="gray" border="5px solid gray" rounded="2xl" src={src}/>
    )
}