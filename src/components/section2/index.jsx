import React from 'react'
import Wrap01 from '../Wrapper1'
import './index.scss'
import Wrap02 from '../Wrapper2'
import Button from '../Button'

const text1 = '从客户的角度出发，使需求多样化， 从有吸引力的“计划书/生产/建设/维修” 创建服务的标牌解决方案公司。'
const text2 = '我们的企业文化融合了新技术，同时延续了历史并传递了技术。 新的人力资源扩展了以经验积累的知识为中心的知识和技术范围。'

function Sec02() {
    return (
        <div className='sec02'>
            <div className="part1">
                <div className='sec2-left'>
                    <Wrap01 text={text1}/>
                </div>
                <div className="sec2-right">
                    <Wrap02 title={'about us'} content={'感动价值 的创作'}/>
                </div>
            </div>
            <div className="part2">
                <div className='sec2-left'>
                      <Wrap02 title={'compant'}  content={'传统与 创新性 企业文化'}/>
                </div>
                <div className="sec2-right">
                      <Wrap01 text={text2}/>                  
                </div>
            </div>
            <div className="part3">
                <Wrap02 title={'recruit'} content={'可以一起成长 我们正在寻找朋友。'} />
                <Button />
            </div>
        </div>
    )
}

export default Sec02
