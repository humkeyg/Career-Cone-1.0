import React from 'react';
import 'bulma/css/bulma.min.css';
import { Card, Image, Content, Media, Heading } from 'react-bulma-components';

import alison from "../../images/alison.JPG"
import daniel from "../../images/daniel.png"
import gabby from "../../images/gabby.jpg"
import korey from "../../images/korey.jpg"
import ryan from "../../images/ryan.jpg"
import icecream from "../../images/SummerIceCream_04.jpg"


export default function About() {
  return (
    <div ClassName="aboutMe">
        <h2 className="section-title">
        Meet the team:
        </h2>
        <div >
                <Card is style={{ width: 300, margin: 'auto' }}>
            <Card.Image
                size="4by3"
                src={icecream}
            />
            <Card.Content>
                <Media>
                <Media.Item renderAs="figure" align="left">
                    <Image
                    size={64}
                    alt="64x64"
                    src={alison}
                    />
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
                    committed work ethic seeking employment to kick start career in website development 
                    and content curation.
                    <br />
                <a href="https://github.com/afunkhouser">github.com</a>
                
                
                </Content>
            </Card.Content>
            </Card>
        </div>


        <div >
            <Card style={{ width: 300, margin: 'auto' }} >
            <Card.Image
                size="4by3"
                src={icecream}
            />
            <Card.Content>
                <Media>
                <Media.Item renderAs="figure" align="left">
                    <Image
                    size={64}
                    alt="64x64"
                    src={daniel}
                    />
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
                <a href="https://github.com/Diaz-Daniel">github.com</a>
                </Content>
            </Card.Content>
            </Card>
        </div>

    <Card style={{ width: 300, margin: 'auto' }}>
      <Card.Image
        size="4by3"
        src={icecream}
      />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" align="left">
            <Image
              size={64}
              alt="64x64"
              src={korey}
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>Korey Cheshire</Heading>
            <Heading subtitle size={6}>
              @koreycheshire
            </Heading>
          </Media.Item>
        </Media>
        <Content>
        I am currently working as a financial advisor, but am looking to explorer the world of web development.
         I enjoy cooking, video games, and the outdoors.
            <br />
          <a href="https://github.com/kcshire211">github.com</a>
          
          
        </Content>
      </Card.Content>
    </Card>

    <Card style={{ width: 300, margin: 'auto' }}>
      <Card.Image
        size="4by3"
        src={icecream}
      />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" align="left">
            <Image
              size={64}
              alt="64x64"
              src={gabby}
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>Gabby Humkey</Heading>
            <Heading subtitle size={6}>
              @gabbyhumkey
            </Heading>
          </Media.Item>
        </Media>
        <Content>
        I am a new web-developer, eager to master new coding languages. Currently attending UW Coding 
        Bootcamp for Full-Stack Web Development.
            <br />
          <a href="https://github.com/kcshire211">github.com</a>
          
          
        </Content>
      </Card.Content>
    </Card>

    <Card style={{ width: 300, margin: 'auto' }}>
      <Card.Image
        size="4by3"
        src={icecream}
      />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" align="left">
            <Image
              size={64}
              alt="64x64"
              src={ryan}
            />
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
          <a href="https://github.com/degrootr253">github.com</a>
          
          
        </Content>
      </Card.Content>
    </Card>

    <Card style={{ width: 300, margin: 'auto' }}>
      <Card.Image
        size="4by3"
        src={icecream}
      />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" align="left">
            <Image
              size={64}
              alt="64x64"
              src={alison}
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>Lateah Holmes</Heading>
            <Heading subtitle size={6}>
              @LateahHolmes
            </Heading>
          </Media.Item>
        </Media>
        <Content>
        I am Lateah
            <br />
          <a href="https://github.com/lateahmh">github.com</a>
          
          
        </Content>
      </Card.Content>
    </Card>



</div>


  )
}