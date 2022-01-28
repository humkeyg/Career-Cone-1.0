import React, { useState } from "react";
import { Form, Button, Box, Block, Notification} from "react-bulma-components";
import { Container, Row, Col } from "react-bootstrap";
import "./Jobs.css";

export default function Jobs() {
  const [formState, setFormState] = useState({
    jobs: "",
    zipCode: ""
  });
  const [jobs, setJobs] = useState([])
  function searchJobs(jobs, zipCode) {
    var jobLocation = "&LocationName=" + zipCode;
    var jobCategory = "PositionTitle=" + jobs;
    var host = "data.usajobs.gov";
    var userAgent = "daniel.diaz.0515@gmail.com";
    var authKey = "TM6TEbYm8310tpJD+9CyVa7cpguDIpbSZKZwSgnukTU=";
    var url =
      "https://data.usajobs.gov/api/search?" +
      jobCategory +
      jobLocation +
      "&ResultsPerPage=5";


      fetch(url, {
        method: "GET",
    
        headers: {
          Host: host,
          "User-Agent": userAgent,
          "Authorization-Key": authKey,
        },
      }).then(res => {
        return res.json();
      }).then(data => {
        console.log(data)
        setJobs(data.SearchResult.SearchResultItems)
        // Map Over each response and append to section of the JSX
      })
  }
  console.log(jobs)
  function displaySearches() {
    
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchJobs(formState.jobs, formState.zipCode);
    setFormState({
      jobs: "",
      zipCode: ""
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <header className="header">Search</header>
          <form onSubmit={handleFormSubmit}>
          <Form.Field>
            <Form.Control>
              <Form.Input name='jobs' placeholder="Position title" onChange={handleChange}/>
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Control>
              <Form.Input name='zipCode' placeholder="Zip Code" onChange={handleChange}/>
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Control>
              <Button id="searchBtn" color="primary" type="submit">Search</Button>
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Control>
              <Form.Input placeholder="Company Name" />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Control>
              <Button className="srchBtn" color="primary">Search</Button>
            </Form.Control>
          </Form.Field>
        </form>
    
        {/* <Box>
          <React.Fragment key=".0">
            <Block>
              <Notification color="info">
            <Button className= "save" color="">
              Save
            </Button>
                Some text
              </Notification>
            </Block>
            <Block>
              <Notification color="success">
              <Button className= "save" color="">
              Save
            </Button>
                Some more text
              </Notification>
            </Block>
            <Block>
              <Notification color="danger">
              <Button className= "save" color="">
              Save
            </Button>
                All of this are evently spaced
              </Notification>
            </Block>
            <Block>
              <Notification color="warning">
              <Button className= "save" color="" >
              Save
            </Button>
                This one does not generate extra margin at the bottom
              </Notification>
            </Block>
          </React.Fragment>
        </Box> */}
      </Col>

      <Col>
        <div className="notification is-white">
          <h1 id="result-header" id="underline" className="title"><u>RESULTS</u></h1>
          <div className="card">
              <div className="card-content">
                  {
                    jobs.map(({MatchedObjectDescriptor:job}) => (
                      <div>
                        <p>{job.PositionTitle}</p>
                        <p>{job.DepartmentName}</p>
                      </div>
                    ))
                  }
                  {/* <p className="title">
                      DISPLAYED RESULTS WILL GO HERE
                  </p> */}
              </div>
              <footer className="card-footer">
                  <p className="card-footer-item">
                      <span>
                          View on <a href="https://www.indeed.com/">indeed.com</a>
                      </span>
                  </p>
              </footer>
          </div>
        </div>
      </Col>

  </Row>



<hr />


    </Container>



  );
}
