import { FormValues, TextToImageResponse } from '../model/interfaces'

export default async function textToImage(data: FormValues, huggingfaceToken: string): Promise<TextToImageResponse> {
    const apiURL = `https://api-inference.huggingface.co/models/${data.model}`
    const bodyParameters = {
        inputs: data.prompt,
        parameters: {
            width: data.width,
            height: data.height
        }
    }

    const init = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${huggingfaceToken}`,
            'Content-Type': 'application/json',
            'x-wait-for-model': 'false'
        },
        body: JSON.stringify(bodyParameters)
    }

    try {
        const response = await fetch(apiURL, init)
        if (response.ok) {
            return {
                image: await response.blob(),
                isError: false,
                message: 'Image generated successfully'
            }
        } else {
            const error = await response.json()
            throw new Error(error.error)
        }
    } catch (error: any) {
        console.error(error.message)
        return {
            image: null,
            isError: true,
            message: error.message
        }
    }
}
