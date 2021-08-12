import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class StuffItemAdmin extends React.Component {
  render() {
    return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          {this.props.stuff.name}
        </Card.Header>
        <Card.Meta>
          Party of {this.props.stuff.quantity}
          <Button floated='right'>
          Edit Reservation
          </Button>
        </Card.Meta>
        <Card.Description>
        <strong>Start Time:</strong> {this.props.stuff.startTime} <br/>
        <strong>End Time:</strong> {this.props.stuff.endTime}        
        <Button floated='right'>
          View Details
        </Button>
        </Card.Description>
      </Card.Content>
    </Card>
    );
  }
}

// Require a document to be passed to this component.
StuffItemAdmin.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    endTime: PropTypes.string,
    _id: PropTypes.string,
    startTime: PropTypes.string,
  }).isRequired,
};

export default StuffItemAdmin;
