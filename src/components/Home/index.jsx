import React from 'react'
import './index.scss'

function Home() {
    return (
        <div className='home'>
            <div className="home-text">
                <div className="beyond">
                    <span>beyond</span>
                </div>
                
                <div className="creation">
                    <span>creation</span>
                </div>
                <div className='the'>the</div>
                <div className='slogan'>创作使人印象深刻。</div>
            </div>
            <div className="scroll">
                <div className="scroll-text">scroll</div>
                <div className='scroll-line'></div>                
            </div>
        </div>
    )
}

export default Home
