import React, {useState} from 'react'
import './index.scss'

function Header() {
    const [visible, set] = useState(false)
    const handleClick = () => {
        set(!visible)
    }
    return (
        <div className='header-container'>
            <div className="header-logo">global sign solution</div>
            <div className="menu-container">
                <div className="menu-btn" onClick={handleClick}>
                    <div className="open"></div>
                </div>
                <div className={`menu-lists ${visible? 'visible' : ''}`}>
                    <div className="close" onClick={handleClick}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    <div className="menu-item">
                        <ul>
                            <li>home</li>
                            <li>about us</li>
                            <li>company profile</li>
                            <li>recuit</li>
                            <li>contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
