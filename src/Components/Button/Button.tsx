import React from 'react'
import './Button.css'

interface Props {
    title: string
    className?: string
    onClick?: () => void
    type?: {}
}

export default function Button({ title, className, onClick, type }: Props) {
    let style = {};

    switch (type) {
        case "sucess":
            style = { backgroundColor: "green" }
            break;
        case "fail":
            style = { backgroundColor: "red" }
            break;
    }

    return (
        <div style={style} className={`button ${className}`} onClick={onClick}>{title}</div>
    )
}
