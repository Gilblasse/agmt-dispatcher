/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Timeline } from 'antd';
import { map, groupBy, entries } from 'lodash';
import TimeLineItemTrip from './TimeLineItemTrip';
import styles from './styles.module.scss';
import HoverSelected from './HoverSelected';
import tripsData from '../../constants/TimeLineTrips/defaults';

function TripTimeLine() {
  const [selectedTrip, setSelectedTrip] = useState({})
  const [trips, setTrips] = useState({})

  useEffect(()=>{
    const sortedTrips = tripsData.sort((a,b) => a.time.localeCompare(b.time))
    const groupTrips = groupBy(sortedTrips, trip => moment(trip.time,'LT').hour())

    setTrips(groupTrips)
  },[tripsData])


  return (
      <div className={styles.tripTimeLineWrapper}>
        <HoverSelected selectedTrip={selectedTrip} />
        <Timeline mode="left" pending pendingDot={()=> null} className={styles.timeLineContainer}>
          {
            map(entries(trips), ([hour,hourTrips]) => {
              return (
              <Timeline.Item label={`${hour}:00`} key={hour}>
                {
                  map(hourTrips, (trip,i) => (
                    <TimeLineItemTrip
                      key={i}
                      {...trip}
                      setSelectedTrip={setSelectedTrip}
                    />
                  ))
                }
              </Timeline.Item>
              )
            })
          }
        </Timeline>
      </div>
  );
}

export default TripTimeLine