import React, {Component} from 'react';
import JobList from './JobList';

class JobTrackerBoard extends Component {
  render() {
    return (
      <div className="app">
        <JobList id='applied' title="Applied" jobs={
          this.props.jobs.filter((job) => job.status === 'applied')
        }/>

        <JobList id='phone-screen' title="Phone Screen" jobs={
          this.props.jobs.filter((job) => job.status === 'phone-screen')
        }/>
      </div>
    );
  }
}

export default JobTrackerBoard;
