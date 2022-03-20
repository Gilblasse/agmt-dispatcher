import React, {useState} from 'react'
import { Dropdown, Menu, Space } from 'antd';
import PropTypes from 'prop-types';
import { UpOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';


export default function TimeLineItemTrip({isPassed, time, name, status}) {
    const [isVisible, setIsVisible] = useState(false)

    const onHoverEnter = e => {
        console.log(e)
        setIsVisible(true);
    }

    const onHoverExit = e => {
        console.log(e)
        setIsVisible(false);
    }

    const onVisibleChange = e => {
        console.log({e})
    }

    const textClass = isPassed ? styles.passedTrip : styles.unCompletedTrips
    const textClasses = status === "canceled" ? styles.cancelledTrip : textClass
    const statusIndicatorClass = {
        completed: styles.completed,
        statusActive: styles.statusActive,
        inRoute: styles.statusInRoute,
        inTrans: styles.statusInTrans,
        wating: styles.statusWating,
        default: "",
        canceled: ""
    }
    const statusText = {
        completed: 'Completed',
        inRoute: 'In Route',
        inTrans: 'In Transition',
        wating: 'Waiting',
        canceled: 'Canceled',
        default: '',
    }


    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );

  return (
    <div className={styles.itemContainer} style={{paddingTop: 20}}>
        <Dropdown overlay={menu} trigger={['click']} onVisibleChange={onVisibleChange}>
            <div className={styles.innerItemWrapper} onMouseEnter={onHoverEnter} onMouseLeave={onHoverExit}>
                    <>
                        <Space direction="horizontal" size="middle">
                            <div className={`${styles.status} ${statusIndicatorClass[status]}`}></div>
                            <Space direction="horizontal" size="large" className={textClasses}>
                                <div>{time}</div>
                                <div>{name}</div>
                            </Space>
                        </Space>

                        {
                            isVisible && (
                                <Space className={styles.statusAction} size="middle">
                                    <span>{statusText[status]}</span>
                                    <div className={styles.iconWrapper}>
                                        <UpOutlined />
                                    </div>
                                </Space>
                            )
                        }
                    </>
            </div>
        </Dropdown>
    </div>
  )
}

TimeLineItemTrip.propTypes = {
    status: PropTypes.string,
    isPassed: PropTypes.bool,
    time: PropTypes.string,
    name: PropTypes.string,
}

TimeLineItemTrip.defaultProps = {
    status:"default",
    isPassed: false,
}