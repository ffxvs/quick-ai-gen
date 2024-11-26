import { createListCollection, ListCollection } from '@chakra-ui/react'

const aspectRatios = {
    'square': {
        'width': 1024,
        'height': 1024
    },
    'potrait': {
        'width': 768,
        'height': 1152
    },
    'landscape': {
        'width': 1152,
        'height': 768
    }
}

const checkpoints: ListCollection<{ label: string, value: string }> = createListCollection({
    items: [
        {label: 'Stable Diffusion 3.5 Large Turbo', value: 'stabilityai/stable-diffusion-3.5-large-turbo'},
        {label: 'Stable Diffusion 3.5 Large', value: 'stabilityai/stable-diffusion-3.5-large'},
        {label: 'Stable Diffusion 3 Medium', value: 'stabilityai/stable-diffusion-3-medium-diffusers'},
        {label: 'Stable Diffusion XL', value: 'stabilityai/stable-diffusion-xl-base-1.0'},
        {label: 'FLUX.1 Schnell', value: 'black-forest-labs/FLUX.1-schnell'},
        {label: 'FLUX.1 Dev', value: 'black-forest-labs/FLUX.1-dev'}
    ]
})


export { checkpoints, aspectRatios }