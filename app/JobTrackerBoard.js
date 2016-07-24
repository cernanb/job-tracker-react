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

        <JobList id='tech-interview' title="Technical Interview" jobs={
          this.props.jobs.filter((job) => job.status === 'tech-interview')
        }/>
      </div>
    );
  }
}

export default JobTrackerBoard;
