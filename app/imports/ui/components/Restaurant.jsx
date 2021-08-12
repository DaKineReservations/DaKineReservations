import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Restaurant extends React.Component {
  render() {
    return (
      <Card centered color='green'>
      <Image src={this.props.restaurant.image}/>
      <Card.Content>
        <Card.Header>{this.props.restaurant.firstName} </Card.Header>     
        <Card.Description>{this.props.restaurant.description}</Card.Description>   
      </Card.Content>
      <Card.Content extra>
      <a>
        <Icon name='align justify' />
        View This Restaurant
      </a>
      </Card.Content>
    </Card>
    );
  }
}

// Require a document to be passed to this component.
Restaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Restaurant);
