'use client'

import { HStack } from '@chakra-ui/react'
import { LuRectangleHorizontal, LuRectangleVertical, LuSquare } from 'react-icons/lu'
import { SegmentedControl } from './ui/segmented-control'
import { Field } from './ui/field'

export default function AspectRatio({aspectRatio, setAspectRatio}: { aspectRatio: string, setAspectRatio: (value: string) => void }) {
    return (
        <Field label="Aspect ratio">
            <SegmentedControl
                size="md"
                value={aspectRatio}
                onValueChange={(e) => setAspectRatio(e.value)}
                items={[
                    {
                        value: 'square',
                        label: (
                            <HStack>
                                <LuSquare/>
                                Square
                            </HStack>
                        )
                    },
                    {
                        value: 'potrait',
                        label: (
                            <HStack>
                                <LuRectangleVertical/>
                                Potrait
                            </HStack>
                        )
                    },
                    {
                        value: 'landscape',
                        label: (
                            <HStack>
                                <LuRectangleHorizontal/>
                                Landscape
                            </HStack>
                        )
                    }
                ]}
            />
        </Field>
    )
}