import React from 'react';
import { Grid, Button } from '@material-ui/core';

function App() {
  return (
    <div>
      <h1>What's New</h1>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="primary" href="/exams">
            Upcoming 7 exams
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="primary" href="/homeworks">
            Pending 16 homeworks
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="primary" href="/notifications">
            New 5 notifications
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="primary" href="/messages">
            New 1 message
          </Button>
        </Grid>
      </Grid>
      <h1>Today</h1>
      <ul>
        <li>Meeting at 10:00 AM</li>
        <li>Lunch at 12:30 PM</li>
        <li>Workout at 5:00 PM</li>
      </ul>
    </div>
  );
}

export default App;
