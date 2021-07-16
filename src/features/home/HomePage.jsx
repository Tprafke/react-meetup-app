import React from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";

export default function HomePage({ history }) {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Icon
            name='fire'
            size='large'
            style={{ marginBottom: 12 }}
            alt='logo'
          />
          EventFire
        </Header>
        <Button onClick={() => history.push("/events")} size='huge' inverted>
          Get Started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
}
