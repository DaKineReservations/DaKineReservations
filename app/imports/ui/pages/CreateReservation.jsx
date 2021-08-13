import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { AutoForm, AutoField, TextField, SelectField, ErrorsField, SubmitField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';

const CreateReservationSchema = new SimpleSchema2Bridge(
  new SimpleSchema({
    'startTime':
        {
          type: Date,
          required: true,
        },

    'endTime':
        {
          type: Date,
          required: true,
        },

    'seatingPreference':
        {
          type: String,
          defaultValue: 'No Preference',
          allowedValues: ['No Preference', 'Booth', 'Table', 'Bar', 'Outdoor'],
          required: false,
        },

    'specialRequests':
        {
            type: String,
            required: false
        },
  }),
);

/** A simple static component to render some text for the landing page. */
class CreateReservation extends React.Component {
  render() {
    return (
      <Container id='createReservation' container>
        <AutoForm schema={CreateReservationSchema} 
        onSubmit={(model) => swal('Reservation Created For:', `${(model.startTime)}`, 'success')}>
            <Segment>
              <AutoField name='startTime'/>
              <AutoField name='endTime'/>
              <SelectField name='seatingPreference'/>
              <TextField name='specialRequests'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
      </Container>
    );
  }
}

export default CreateReservation;
