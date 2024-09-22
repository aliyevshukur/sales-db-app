import React from 'react'

interface PropsType {
    width: string | number | undefined,
    height: string | number | undefined
}

export default function Wave({ width, height }: PropsType) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className={"about-section-1-wave"}
        >
            <path fill="#1f1f1f" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,234.7C672,235,768,213,864,208C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    )
}
