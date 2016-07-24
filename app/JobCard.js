import React, {Component} from 'react';
import CheckList from './CheckList';

class JobCard extends Component {
  render() {
    return (
      <div className="job-card">
        <div className="job-card-title">{this.props.title}</div>
        <div className="job-card-company">{this.props.company}</div>
        <div className="card-details">
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>  
      </div>
    );
  }

}

export default JobCard;
