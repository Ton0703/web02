import React from 'react'
import Button from '../../components/Button'
import './index.scss'

function Sec01() {
    return (
        <div className='section-1'>
            <div className="sec1-container">
                <div className='sce1-title'>我们为防止新的冠状病毒传染病传播所做的努力</div>
                <div className='sce1-content'>
                    <span>在我们公司，由于新的冠状病毒感染的传播，</span>
                    <span>考虑到确保客户，员工，他们的家人和社会的安全，我们采取预防措施。</span>
                </div>
                <Button />
            </div>
        </div>
    )
}

export default Sec01
