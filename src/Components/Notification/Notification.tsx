import React from 'react';
import Button from '../Button/Button';
import './Notification.css';

interface Props {
    onClick: () => void;
    message: string
    type: string
}

export default function Notification({ onClick, message, type }: Props) {
    let bgColor = "";
    switch (type) {
        case "success":
            bgColor = "green";
            break;
        case "fail":
            bgColor = "red";
            break;
    }
    return (
        <div className='notification'>
            <div className="message">{message}</div>
            <Button title="ok" onClick={onClick} bgColor={bgColor} />
        </div>
    )
}
