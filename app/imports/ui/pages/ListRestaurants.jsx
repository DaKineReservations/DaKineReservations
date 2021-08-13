import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Progress, Segment, Grid } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Restaurant from '../components/Restaurant';
import { Stuffs } from '../../api/stuff/Stuff';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListRestaurants extends React.Component {

  restaurants = [
    {
      firstName: 'Mai Tai\'s',
      image: 'https://image.shutterstock.com/image-vector/wine-glass-bottle-logo-design-600w-626927420.jpg',
      description: 'Local cuisine'
    },
    {
      firstName: 'Da Spot', 
      image: 'https://image.shutterstock.com/image-vector/black-restaurant-logo-600w-787714876.jpg',
      description: 'Local cuisine'
    },
    {
      firstName: 'Appetito', 
      image: 'https://image.shutterstock.com/image-vector/logo-restaurant-gold-black-600w-266309954.jpg',
      description: 'Local cuisine'
    },
    {
      firstName: 'La Pina',
      image: 'https://image.shutterstock.com/image-vector/vector-icon-logo-italian-pasta-600w-1247553871.jpg',
      description: 'Local cuisine'
    },
    {
      firstName: 'Shore Fyre', 
      image: 'https://image.shutterstock.com/image-vector/love-eat-logo-cafe-restaurant-600w-513914290.jpg',
      description: 'Local cuisine'
    },
    {
      firstName: 'Maui Brewing Co.', 
      image: 'https://image.shutterstock.com/image-vector/beer-set-lager-vintage-labels-600w-157302767.jpg',
      description: 'Local cuisine'
    },
    {
      firstName: 'Deck', 
      image: 'https://image.shutterstock.com/image-vector/retro-barbecue-grill-flame-fire-600w-201969460.jpg',
      description: 'Local cuisine'
    },
    {
      firstName: 'Basalt',
      image: 'https://image.shutterstock.com/image-vector/grill-logo-template-600w-1179447070.jpg',
      description: 'Local cuisine'
    },
  ];

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Progress percent={33} success>
          <Grid columns='equal'>
            <Grid.Column>Browse Restaurants</Grid.Column>
            <Grid.Column>Create Reservation</Grid.Column>
            <Grid.Column>Confirm Reservation</Grid.Column>
          </Grid>
         </Progress>
        <Header as="h1" textAlign="center">Restaurants</Header>
        <Card.Group itemsPerRow={4}>
          {this.restaurants.map( (restaurant, index) => <Restaurant key={index} restaurant={restaurant} />)}
        </Card.Group>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListRestaurants.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Stuffs.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const stuffs = Stuffs.collection.find({}).fetch();
  return {
    stuffs,
    ready,
  };
})(ListRestaurants);
