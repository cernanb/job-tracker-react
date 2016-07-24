import React, {Component} from 'react';
import {render} from 'react-dom';
import JobTrackerBoard from './JobTrackerBoard';

let jobCardsList = [
  {
    id: 1,
    title: "Web Developer",
    company: "Facebook",
    status: "applied",
    tasks: [],
    notes: []
  },
  {
    id: 2,
    title: "Front End Engineer",
    company: "Google",
    status: "phone-screen",
    tasks: [
      {
        id: 1,
        name: "Schedule Phone Screen",
        done: false
      }
    ],
    notes: [
      {
        id: 1,
        description: "Received email from HR manager to schedule a phone screen."
      }
    ]
  },
  {
    id: 3,
    title: "Ruby on Rails Developer",
    company: "Thoughtbot",
    status: "tech-interview",
    tasks: [],
    notes: []
  },
]

render(<JobTrackerBoard jobs={jobCardsList} />, document.getElementById('root'));
