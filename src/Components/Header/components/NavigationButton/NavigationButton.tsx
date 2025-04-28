import React from 'react';
import './NavigationButton.scss';

interface Props {
    menuOpen: boolean,
    toggleMenu: any,
}

export default function NavigationButton({ menuOpen, toggleMenu }: Props) {
    return <button className="nav-button" onClick={() => { toggleMenu() }}>
        <span className={`nav-button-icon ${menuOpen ? 'nav-button-icon-open' : ''}`} />
        <span className={`nav-button-icon ${menuOpen ? 'nav-button-icon-open' : ''}`} />
        <span className={`nav-button-icon ${menuOpen ? 'nav-button-icon-open' : ''}`} />
    </button>
}