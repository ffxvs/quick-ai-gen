import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import Page from '../App'
import AspectRatio from '../components/aspect-ratio'
import ModelSelector from '../components/model-selector'
import MainForm from '../components/main-page'
import MainPage from '../components/main-page'
import Prompt from '../components/prompt'
import ImageResult from '../components/image-result'
import Header from '../components/header'
import { useState } from 'react'
import { checkpoints } from '../model/data'
import Footer from '../components/footer'
import { ThemeToggle } from '../components/theme-toggle'

const ComponentPreviews = () => {
    const defaultSrc = '/static/placeholder.svg'
    const [src] = useState<string>(defaultSrc)
    const [model, setModel] = useState<string[]>([checkpoints.items[0].value])
    const [aspectRatio, setAspectRatio] = useState<string>('square')
    const [prompt, setPrompt] = useState<string>('')
    const [invalid, setInvalid] = useState<boolean>(false)

    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Page">
                <Page/>
            </ComponentPreview>
            <ComponentPreview path="/AspectRatio">
                <AspectRatio aspectRatio={aspectRatio} setAspectRatio={setAspectRatio}/>
            </ComponentPreview>
            <ComponentPreview path="/ModelSelector">
                <ModelSelector model={model} setModel={setModel}/>
            </ComponentPreview>
            <ComponentPreview path="/MainForm">
                <MainForm/>
            </ComponentPreview>
            <ComponentPreview path="/Prompt">
                <Prompt invalid={invalid} setInvalid={setInvalid} prompt={prompt} setPrompt={setPrompt}/>
            </ComponentPreview>
            <ComponentPreview path="/ImageResult">
                <ImageResult src={src}/>
            </ComponentPreview>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
            <ComponentPreview path="/MainPage">
                <MainPage/>
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/Footer">
                <Footer/>
            </ComponentPreview>
            <ComponentPreview path="/ThemeToggle">
                <ThemeToggle/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;