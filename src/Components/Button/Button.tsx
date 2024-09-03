import React from 'react'
import './Button.css'

interface Props {
    title: string
    className?: string
}

export default function Button({ title, className }: Props) {
    return (
        <div className={`button ${className}`}>{title}</div>
    )
}
