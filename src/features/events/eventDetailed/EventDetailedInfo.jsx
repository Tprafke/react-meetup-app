import React from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import { format } from "date-fns";
import EventDetailedMap from "./EventDetailedMap";
import { useState } from "react";

export default function EventDetailedInfo({ event }) {
  const [mapOpen, setMapOpenToggle] = useState(false);
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <Icon size='large' color='orange' name='info' />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='calendar' size='large' color='orange' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{format(event.date, "MMMM d, yyyy h:mm a")}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='marker' size='large' color='orange' />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue.address}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              onClick={() => setMapOpenToggle(!mapOpen)}
              color='orange'
              size='tiny'
              content={mapOpen ? "Hide map" : "Show map"}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {mapOpen && <EventDetailedMap latLng={event.venue.latLng} />}
    </Segment.Group>
  );
}
