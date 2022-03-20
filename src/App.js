import { Card } from 'antd';
import React from 'react';
import TripTimeLine from './components/TimeLineTrips/TripTimeLine';

function App() {
  return (
    <div>
      <Card bordered style={{width: '40vw', margin: '10px auto'}}>
        <TripTimeLine />
      </Card>
    </div>
  )
}

export default App;
