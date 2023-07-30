import { Row, Col, Typography, Collapse  } from 'antd'
import React from 'react'
import '../css/awardAccordion.css'
import { AwardList } from '../../constant/AwardList'

const AwardAccordion = () => {
  return (
    <Row>
        <Col span={24}>
            <Typography.Title className='awardText'>
                Awards
            </Typography.Title>

            {
              AwardList.map((item: {title: string, list: Array<string>}, index: number)=> {
                return (
                  <Collapse
                   expandIconPosition='right'
                   className='accordion'
                    items={[{ key: index, label: <Typography className='title'>{item.title}</Typography>, children: 
                    <ul>
                      {
                        item.list.map((list: string, index: number)=> {
                          return(
                            <li key={index}>{list}</li>
                          )
                        })
                      }
                    </ul> }
                  ]}
                  />
                )
              })
            }
            
        </Col>
    </Row>
  )
}

export default AwardAccordion