import React from 'react'
import './Notification.css'
import Button from '../Button/Button'

interface Props {
    onClick: () => void;
    message: string
    type: string
}

export default function Notification({ onClick, message, type }: Props) {
    return (
        <div className='notification'>
            <div className="message">{message}</div>
            <Button title="ok" onClick={onClick} type={type} />
        </div>
    )
}
