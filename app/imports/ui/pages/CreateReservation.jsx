import React from 'react';
import { Container, Segment, Progress, Grid, Header, Image } from 'semantic-ui-react';
import { AutoForm, AutoField, LongTextField, SelectField, ErrorsField, SubmitField } from 'uniforms-semantic';
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
      <Container id='createReservation'>

        <Progress percent={66} success>
            <Grid columns='equal'>
                <Grid.Column>Browse Restaurants</Grid.Column>
                <Grid.Column>Create Reservation</Grid.Column>
                <Grid.Column>Confirm Reservation</Grid.Column>
            </Grid>
        </Progress>
        
        <Header as="h1" textAlign="center">Make A Reservation</Header>
        <Segment>
            <Grid centered divided padded verticalAlign='middle'>
                 <Grid.Column width={4}>
                     <Image size='medium' src='https://image.shutterstock.com/image-vector/wine-glass-bottle-logo-design-600w-626927420.jpg'/>
                 </Grid.Column>
                 <Grid.Column width={10}>
                     <Segment textAlign="center" padded="very">
                         <Header as='h2' textAlign='center'>Mai Tai's</Header>
                         <Header as='h3' textAlign='center'>Hours: 12:00 PM - 1:00 AM</Header>
                     </Segment>
                  </Grid.Column>
              </Grid>
        </Segment>
        
        <AutoForm schema={CreateReservationSchema} 
        onSubmit={(model) => swal('Reservation Created For:', `${(model.startTime)}`, 'success')}>
            <Segment>
              <AutoField name='startTime'/>
              <AutoField name='endTime'/>
              <SelectField name='seatingPreference'/>
              <LongTextField name='specialRequests'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>

      </Container>
    );
  }
}

export default CreateReservation;
