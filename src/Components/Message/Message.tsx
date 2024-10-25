import React from 'react'

interface Props {
    message: string
}

export default function Message({ message }: Props) {

    return (
        <div className='message'>{message}</div>
    )
}
