import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  Card,
  Image,
  Content,
  Media,
  Heading,
  Columns,
} from "react-bulma-components";

import "./About.css";

import alison from "../../images/alison.JPG";
import daniel from "../../images/daniel.png";
import gabby from "../../images/gabby.jpg";
import korey from "../../images/korey.jpg";
import ryan from "../../images/ryan.jpg";
import lateah from "../../images/lateah.jpg";
import icecream from "../../images/SummerIceCream_04.jpg";

export default function About() {
  return (
    <div ClassName="aboutMe">
      <h2 className="section-title">Meet the team:</h2>

      <Row>
        <Col>
          <Card is style={{ width: 300, margin: "auto" }}>
            <Card.Image size="4by3" src={icecream} />
            <Card.Content>
              <Media>
                <Media.Item renderAs="figure" align="left">
                  <Image size={64} alt="64x64" src={alison} />
                </Media.Item>
                <Media.Item>
                  <Heading size={4}>Alison Funkhouser</Heading>
                  <Heading subtitle size={6}>
                    @alisonfunkhouser
                  </Heading>
                </Media.Item>
              </Media>
              <Content>
                Full stack website developer with strong, independent, and
                committed work ethic seeking employment to kick start career in
                website development and content curation.
                <br />
                <a href="https://github.com/afunkhouser">
                  github.com/afunkhouser
                </a>
              </Content>
            </Card.Content>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: 300, margin: "auto" }}>
            <Card.Image size="4by3" src={icecream} />
            <Card.Content>
              <Media>
                <Media.Item renderAs="figure" align="left">
                  <Image size={64} alt="64x64" src={daniel} />
                </Media.Item>
                <Media.Item>
                  <Heading size={4}>Daniel Diaz</Heading>
                  <Heading subtitle size={6}>
                    @danieldiaz
                  </Heading>
                </Media.Item>
              </Media>
              <Content>
                Fleet Engineer preparing to transfer into the tech industry.
                <br />
                <a href="https://github.com/Diaz-Daniel">
                  github.com/Diaz-Daniel
                </a>
              </Content>
            </Card.Content>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: 300, margin: "auto" }}>
            <Card.Image size="4by3" src={icecream} />
            <Card.Content>
              <Media>
                <Media.Item renderAs="figure" align="left">
                  <Image size={64} alt="64x64" src={korey} />
                </Media.Item>
                <Media.Item>
                  <Heading size={4}>Korey Cheshire</Heading>
                  <Heading subtitle size={6}>
                    @koreycheshire
                  </Heading>
                </Media.Item>
              </Media>
              <Content>
                I am currently working as a financial advisor, but am looking to
                explorer the world of web development. I enjoy cooking, video
                games, and the outdoors.
                <br />
                <a href="https://github.com/kcshire211">
                  github.com/kcshire211
                </a>
              </Content>
            </Card.Content>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card style={{ width: 300, margin: "auto" }}>
            <Card.Image size="4by3" src={icecream} />
            <Card.Content>
              <Media>
                <Media.Item renderAs="figure" align="left">
                  <Image size={64} alt="64x64" src={gabby} />
                </Media.Item>
                <Media.Item>
                  <Heading size={4}>Gaby Humkey</Heading>
                  <Heading subtitle size={6}>
                    @gabyhumkey
                  </Heading>
                </Media.Item>
              </Media>
              <Content>
                I am a new web-developer, eager to master new coding languages.
                Currently attending UW Coding Bootcamp for Full-Stack Web
                Development.
                <br />
                <a href="https://github.com/humkeyg">github.com/humkeyg</a>
              </Content>
            </Card.Content>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: 300, margin: "auto" }}>
            <Card.Image size="4by3" src={icecream} />
            <Card.Content>
              <Media>
                <Media.Item renderAs="figure" align="left">
                  <Image size={64} alt="64x64" src={ryan} />
                </Media.Item>
                <Media.Item>
                  <Heading size={4}>Ryan GeGroot</Heading>
                  <Heading subtitle size={6}>
                    @ryandegroot
                  </Heading>
                </Media.Item>
              </Media>
              <Content>
                I am Ryan
                <br />
                <a href="https://github.com/degrootr253">
                  github.com/degrootr253
                </a>
              </Content>
            </Card.Content>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: 300, margin: "auto" }}>
            <Card.Image size="4by3" src={icecream} />
            <Card.Content>
              <Media>
                <Media.Item renderAs="figure" align="left">
                  <Image size={64} alt="64x64" src={lateah} />
                </Media.Item>
                <Media.Item>
                  <Heading size={4}>Lateah Holmes</Heading>
                  <Heading subtitle size={6}>
                    @LateahHolmes
                  </Heading>
                </Media.Item>
              </Media>
              <Content>
<<<<<<< HEAD
              Lateah is an aspiring machine learning engineer working on developing her software engineering 
              skills as she also juggles developing her data science skills. 
              She has worked for Lyft in there autonomous car department and is currently working
               in global product at indeed. She is generally a data nerd and her one goal is to make
                the unknown know. She likes personal development and her personal goal in life is to never 
                stop learning. 
=======
                Lateah is an aspiring machine learning engineer working on
                developing her software engineering skills as she also juggles
                developing her data science skills. She has worked for Lyft in
                there autonomous car department and is currently working in
                global product at indeed. She is generally a data nerd and her
                one goal is to make the unknown know. She likes personal
                development and her personal goal in life is to never stop
                learning.
>>>>>>> 0534179e5e0bb3bdaffb2867e1ee179cce56ab17
                <br />
                <a href="https://github.com/lateahmh">github.com/lateahmh</a>
              </Content>
            </Card.Content>
          </Card>
        </Col>
      </Row>
      <br />
    </div>
  );
}
