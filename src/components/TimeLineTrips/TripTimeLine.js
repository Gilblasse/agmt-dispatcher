import React from 'react';
import { Timeline } from 'antd';
import TimeLineItemTrip from './TimeLineItemTrip';
import { ClockCircleOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

function TripTimeLine() {

  return (
      <Timeline mode="left" pending pendingDot={()=> null} className={styles.timeLineContainer}>

        <Timeline.Item label="08:00">
          <TimeLineItemTrip
            time="08:25"
            name="Kevin Garner"
            status="completed"
            isPassed
          />
          <TimeLineItemTrip
            time="08:15"
            name="Marie Kennedy"
            status="inRoute"
          />
          <TimeLineItemTrip time="08:25" name="Kevin Garner" status="inTrans" />
          <TimeLineItemTrip time="08:25" name="Ben Gray" status="wating" />
        </Timeline.Item>


        <Timeline.Item label="09:00">
            <TimeLineItemTrip time="09:15" name="Marie Kennedy" />
            <TimeLineItemTrip time="09:25" name="Kevin Garner" />
        </Timeline.Item>


        <Timeline.Item label="10:00">
            <TimeLineItemTrip
              time="10:25"
              name="Kevin Garner"
              status="canceled"
              isPassed
            />
            <TimeLineItemTrip time="10:15" name="Marie Kennedy" />
            <TimeLineItemTrip time="10:25" name="Kevin Garner" />
        </Timeline.Item>

      </Timeline>
  );
}

export default TripTimeLine