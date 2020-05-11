import React from 'react'
import Button from '../Button'
import './index.scss'

function Wrap01({text}) {
    return (
        <div className='wrap-1'>
            <div className='wrap-text'>{text}</div>
            <Button />
        </div>
    )
}

export default Wrap01
