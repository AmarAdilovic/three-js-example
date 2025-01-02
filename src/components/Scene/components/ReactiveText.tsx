import React from 'react'
import { Html } from "@react-three/drei";
import { Typography } from '@mui/material';

interface ReactiveTextProps {
    text: string
}

export const ReactiveText: React.FC<ReactiveTextProps> = ({
    text
}) => {
    return (
        <Html
            center
        >
            <Typography>
                {text}
            </Typography>
        </Html>
    )
}
