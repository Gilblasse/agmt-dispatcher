/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './styles.module.scss';
import { statusText } from './constants';
import { DeleteOutlined, EditOutlined, MoreOutlined, UpOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, Space } from 'antd';


export default function HoverSelected({selectedTrip}) {
  const [isDropDown, setIsDropDown] = useState(false)
  const [hover, setHover] = useState()
  const [prvPos, setPrvPos] = useState(0)
  const animateStyles = useSpring({top: hover})
  const btnColors ={
    delete: {color: 'lightcoral'},
    user: {color: 'black'},
    edit: {color: 'lightslategrey'}
  }


  const onVisibleChange = isVizible => {
    setIsDropDown(isVizible)
  }

  const menu = (
    <Menu>
      <div className={styles.dropDownMenuWrapper} style={{padding: "8px 24px 0px"}}>
        <Space direction="vertical">
          <div>
            <Space>
              <span>Passenger:</span>
              <span>{selectedTrip?.name}</span>
            </Space>
          </div>
          <div>
            Pick Up:
          </div>
          <div>
            Address:
          </div>
        </Space>
      </div>
      <Divider style={{margin: "12px 0"}}/>
      <div className={styles.dropDownMenuBottomWrapper} style={{padding: "0px 20px 8px 20px"}}>
        <div className={styles.menuButtonWrapper}>
          <Space>
            <Button>
              <DeleteOutlined style={btnColors.delete}/></Button>
            <Button><UserOutlined style={btnColors.user}/></Button>
            <Button><EditOutlined style={btnColors.edit}/></Button>
          </Space>

          <Button><MoreOutlined className={styles.moreBtn}/></Button>
        </div>
      </div>
    </Menu>
  );


  useEffect(() => {
    if(selectedTrip.pos){
      if(selectedTrip.pos !== prvPos){
        setPrvPos(selectedTrip.pos)
      }

      setHover(selectedTrip.pos)
      setIsDropDown(false)
    }

  }, [selectedTrip])



  return (
    <>
    {
        selectedTrip?.pos && (
          <Dropdown overlay={menu} trigger={['click']} onVisibleChange={onVisibleChange} visible={isDropDown}>
            <animated.div
            className={styles.ItemHover}
            style={animateStyles}
            onClick={() => setIsDropDown(prv => !prv)}
            >
              <Space className={styles.statusAction} size="middle">
                <span>{statusText[selectedTrip?.status]}</span>
                <div className={`${styles.iconWrapper} ${isDropDown && styles.iconRotate}`}>
                  <UpOutlined />
                </div>
              </Space>
            </animated.div>
          </Dropdown>
        )
    }
    </>
  )
}
