import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Progress, Grid, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class MyRestaurantReservations extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Progress percent={100} success>
          <Grid columns='equal'>
            <Grid.Column>Browse Restaurants</Grid.Column>
            <Grid.Column>Create Reservation</Grid.Column>
            <Grid.Column>Confirm Reservation</Grid.Column>
          </Grid>
         </Progress>

        <Header as="h2" textAlign="center">My Restaurant Reservations</Header>        
        <Card.Group>

          <Card fluid color='green'>
            <Card.Content>
              <Card.Header>
                Mai Tai's
              </Card.Header>
              <Card.Meta>
                Party of 2
              <Button floated='right'>
                Edit Reservation
              </Button>
              </Card.Meta>
              <Card.Description>
              <strong>Start Time:</strong> 7:00 PM <br/>
              <strong>End Time:</strong> 8:00 PM        
              <Button floated='right'>
               View Details
              </Button>
              </Card.Description>
            </Card.Content>
          </Card>

          <Card fluid color='green'>
            <Card.Content>
              <Card.Header>
                La Pina
              </Card.Header>
              <Card.Meta>
                Party of 2
              <Button floated='right'>
                Edit Reservation
              </Button>
              </Card.Meta>
              <Card.Description>
              <strong>Start Time:</strong> 8:30 PM <br/>
              <strong>End Time:</strong> 9:30 PM        
              <Button floated='right'>
               View Details
              </Button>
              </Card.Description>
            </Card.Content>
          </Card>

          <Card fluid color='green'>
            <Card.Content>
              <Card.Header>
                Maui Brewing Co.
              </Card.Header>
              <Card.Meta>
                Party of 2
              <Button floated='right'>
                Edit Reservation
              </Button>
              </Card.Meta>
              <Card.Description>
              <strong>Start Time:</strong> 10:00 PM <br/>
              <strong>End Time:</strong> 11:00 PM        
              <Button floated='right'>
               View Details
              </Button>
              </Card.Description>
            </Card.Content>
          </Card>      

        </Card.Group>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
MyRestaurantReservations.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Stuffs.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const stuffs = Stuffs.collection.find({}).fetch();
  return {
    stuffs,
    ready,
  };
})(MyRestaurantReservations);
