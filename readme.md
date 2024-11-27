<h2 align="center"> :zap: Quick AI Image Generator </h2>

<p align="center">
<img src="https://github.com/user-attachments/assets/9b059cc4-6fd0-4f74-bef7-05600feb597b" width="700" height="450"/>
</p>

## Features
Generate image quickly with Hugging Face Inference API.  
List of models :
* Stable Diffusion 3.5 Large Turbo
* Stable Diffusion 3.5 Large
* Stable Diffusion 3 Medium
* Stable Diffusion XL
* FLUX.1 Schnell
* FLUX.1 Dev

Aspect ratios :
* Square : 1024 x 1024
* Potrait : 768 x 1152
* Landscape : 1152 x 768 

## Teck Stacks
* JavaScript runtime : [Bun](https://bun.sh/)
* Main languange : [Typescript](https://www.typescriptlang.org)
* UI Framework : [React](https://react.dev/)
* UI Components : [Chakra UI](https://www.chakra-ui.com)
* Builder : [Vite](https://vite.dev)

## Development
1. Install dependencies
```bash
# NPM
npm install

# Bun
bun install
```

<br/>

2. Install chakra-ui snippet
```bash
# NPM
npx @chakra-ui/cli@latest snippet add
npx @chakra-ui/cli@latest snippet add button select segmented-control toaster

# Bun
bun x @chakra-ui/cli@latest snippet add
bun x @chakra-ui/cli@latest snippet add button select segmented-control toaster
```
<br/>

3. Create .env file in the project root. Put your HuggingFace API key with Inference permission inside.
```env
VITE_HUGGINGFACE_TOKEN=your_huggingface_api_key
```

<br/>

4. Preview
```bash
# NPM
npx vite

# Bun
bunx vite
```

<br/>

5. Build and run
```bash
# NPM
npx tsc && npx vite build
npx vite preview

# Bun
bunx tsc && bunx vite build
bunx vite preview
```
