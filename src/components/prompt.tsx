'use client'

import { Textarea } from '@chakra-ui/react'
import { Field } from './ui/field'

export default function Prompt({prompt, setPrompt, invalid, setInvalid}: {
    prompt: string,
    setPrompt: (prompt: string) => void,
    invalid: boolean,
    setInvalid: (invalid: boolean) => void
}) {
    return (
        <Field
            label="Prompt"
            invalid={invalid}
            helperText="Describe the image you want to create"
            errorText="Prompt is required">
            <Textarea
                width={{base: '310px', md: '450px'}}
                minHeight="80px"
                variant="subtle"
                placeholder="a cute cat wearing a cowboy hat"
                value={prompt}
                onChange={(e) => {
                    setInvalid(e.target.value == '')
                    setPrompt(e.target.value)
                }}
            />
        </Field>
    )
}