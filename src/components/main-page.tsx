'use client'

import { Center, HStack, VStack } from '@chakra-ui/react'
import ImageResult from './image-result'
import AspectRatio from './aspect-ratio'
import Prompt from './prompt'
import ModelSelector from './model-selector'
import { FormEvent, useState } from 'react'
import { Button } from './ui/button'
import { toaster } from './ui/toaster'
import { aspectRatios, checkpoints } from '../model/data'
import { FormValues } from '../model/interfaces'
import textToImage from '../api/huggingface'

export default function MainPage() {
    const defaultSrc = '/static/placeholder.svg'
    const [src, setSrc] = useState<string>(defaultSrc)
    const [model, setModel] = useState<string[]>([checkpoints.items[0].value])
    const [aspectRatio, setAspectRatio] = useState<string>('square')
    const [prompt, setPrompt] = useState<string>('')
    const [invalid, setInvalid] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setInvalid(prompt == '')
        if (prompt == '') return
        setIsLoading(true)

        const values: FormValues = {
            model: model[0],
            width: (aspectRatios as any)[aspectRatio].width,
            height: (aspectRatios as any)[aspectRatio].height,
            prompt: prompt
        }

        const response = await textToImage(values, import.meta.env.VITE_HUGGINGFACE_TOKEN)
        if (!response.isError) setSrc(URL.createObjectURL(response.image!!))
        const type = response.isError ? 'error' : 'success'

        toaster.create({
            type: type,
            title: type[0].toUpperCase() + type.slice(1),
            description: response.message
        })
        setIsLoading(false)
    }

    function onReset() {
        setPrompt('')
        setSrc(defaultSrc)
    }

    return (
        <form onSubmit={onSubmit} onReset={onReset}>
            <VStack gap="5" marginY="12px">
                <ImageResult src={src}/>
                <ModelSelector model={model} setModel={setModel}/>
                <Center>
                    <AspectRatio aspectRatio={aspectRatio} setAspectRatio={setAspectRatio}/>
                </Center>
                <Prompt prompt={prompt} setPrompt={setPrompt} invalid={invalid} setInvalid={setInvalid}/>
                <HStack gap="6">
                    <Button type="submit" loading={isLoading} loadingText="Generating...">Generate</Button>
                    <Button type="reset" variant="surface">Reset</Button>
                </HStack>
            </VStack>
        </form>
    )
}