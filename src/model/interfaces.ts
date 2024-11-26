interface FormValues {
    model: string
    width: number
    height: number
    prompt: string
}

interface TextToImageResponse {
    image: Blob | null,
    isError: boolean,
    message: string
}

export type { FormValues, TextToImageResponse }