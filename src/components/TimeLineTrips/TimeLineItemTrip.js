import React, { useRef } from 'react'
import { Space } from 'antd';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { statusIndicatorClass } from './constants';


export default function TimeLineItemTrip({isPassed, time, name, status, setSelectedTrip}) {
    const tripRef = useRef()
    const textClass = isPassed ? styles.passedTrip : styles.unCompletedTrips
    const textClasses = status === "canceled" ? styles.cancelledTrip : textClass

    const onHoverEnter = () => {
        const prntPos = tripRef.current.offsetParent.offsetParent.offsetTop
        const tripPos = tripRef.current.offsetTop
        const tripObj = {isPassed, time, name, status, pos: prntPos + tripPos + 11}
        setSelectedTrip(tripObj, prntPos + tripPos + 11)
    }


  return (
    <div className={styles.itemContainer} style={{paddingTop: 20}} ref={tripRef}>
        <div className={styles.innerItemWrapper} onMouseOver={onHoverEnter}>
            <Space direction="horizontal" size="middle">
                <div className={`${styles.status} ${statusIndicatorClass[status]}`}></div>
                <Space direction="horizontal" size="large" className={textClasses}>
                    <div>{time}</div>
                    <div>{name}</div>
                </Space>
            </Space>
        </div>
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