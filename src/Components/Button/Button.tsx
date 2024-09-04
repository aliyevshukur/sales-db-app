import React from 'react'
import './Button.css'

interface Props {
    title: string
    className?: string
    onClick?: () => void
}

export default function Button({ title, className, onClick }: Props) {
    return (
        <div className={`button ${className}`} onClick={onClick}>{title}</div>
    )
}
