import React from 'react'
import './Button.css'

interface Props {
    title: string
    className?: string
    onClick?: () => void
    bgColor?: string
}

export default function Button({ title, className, onClick, bgColor }: Props) {
    let style = { backgroundColor: bgColor };

    return (
        <div style={style} className={`button ${className}`} onClick={onClick}>{title}</div>
    )
}
