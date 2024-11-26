'use client'

import { SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText } from './ui/select'
import { checkpoints } from '../model/data'

export default function ModelSelector({model, setModel}: { model: string[], setModel: (model: string[]) => void }) {
    return (
        <SelectRoot
            size="sm"
            variant="subtle"
            collection={checkpoints}
            width="310px"
            value={model}
            onValueChange={(e) => setModel(e.value)}
        >
            <SelectLabel>Select model</SelectLabel>
            <SelectTrigger>
                <SelectValueText placeholder={model[0]}/>
            </SelectTrigger>
            <SelectContent>
                {checkpoints.items.map((model) => (
                    <SelectItem item={model} key={model.label}>
                        {model.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    )
}