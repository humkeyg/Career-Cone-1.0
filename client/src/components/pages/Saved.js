import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import { Form, Button, Block, Card } from "react-bulma-components";
import { Container, Row, Col } from "react-bootstrap";
// import '../widgets/Calendar.css'
import Notes from "../widgets/Notes";

export default function save() {
  const jobBtn = document.getElementById('jobBtn')
  const savedJobs = document.getElementById('savedJobs')
  if (jobBtn != null) {
    for (var i = 0; i < jobBtn.length; i++) {
      jobBtn[i].addEventListener('click', function (event) {
        var newJob = event.target.nextElementSibling.textContent
        var addedJob = {
          job: newJob,
          resume: true,
          interview: false
        }
        savedJobs.push(addedJob);
        console.log(newJob)
        window.localStorage.setItem('saved-jobs', JSON.stringify(savedJobs))
      })
    }
  }
//})//
  return <Container>
    <div class="tile is-child box notification is-success">
      <div class="file is-grey-light">
        {/* <!--refresh page to see local storage items render--> */}
        <ol id="saved-jobs" class="notification is-info"></ol>
        <button class="clearBtn button is-info">Clear List</button>
      </div>
    </div>
  </Container>;
}
