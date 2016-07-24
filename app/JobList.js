import React, {Component} from 'react';
import JobCard from './JobCard';

class JobList extends Component {

  render() {
    // console.log(this.props.jobs);
    var cards = this.props.jobs.map((job) => {
      return <JobCard key={job.id}
                   title={job.title}
                   company={job.company}
                   tasks={job.tasks}
                   notes={job.notes} />
    });
    console.log(cards);
    return (
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }

}

export default JobList;
