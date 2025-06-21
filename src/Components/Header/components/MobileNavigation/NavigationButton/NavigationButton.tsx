import React, { forwardRef } from 'react';
import './NavigationButton.scss';
interface Props {
    menuOpen: boolean,
    toggleMenu: any,
}

const NavigationButton = forwardRef<HTMLButtonElement, Props>(({ menuOpen, toggleMenu }: Props, ref) => {
    return <button className="nav-button" onClick={() => { toggleMenu() }} ref={ref}>
        <span className={`nav-button-icon ${menuOpen ? 'nav-button-icon-open' : ''}`} />
        <span className={`nav-button-icon ${menuOpen ? 'nav-button-icon-open' : ''}`} />
        <span className={`nav-button-icon ${menuOpen ? 'nav-button-icon-open' : ''}`} />
    </button>
});

export default NavigationButton