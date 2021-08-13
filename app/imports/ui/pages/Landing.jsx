import React from 'react';
import { Grid, Image, Card, CardContent, CardHeader, CardDescription, GridRow, Header, Input, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      
      <Grid id='landing-page' verticalAlign='left' textAlign='center' container>
<Card>
        <Grid.Column width={4}>
          <Image size='small' verticalAlign='middle' circular src="/images/meteor-logo.png"/>
          <br></br>
          <CardHeader><strong>Dan Dakine</strong></CardHeader>
          <br></br>
          <Button fluid>Home</Button>
          <br></br>
          <br></br>
          <Button fluid>Restaurant</Button>
          <br></br>
          <br></br>
          <Button fluid>Create Reservation</Button>
          <br></br>
          <br></br>
          <Button fluid>My Reservations</Button>
          <br></br>
          <br></br>
          <Button fluid color='red'>Sign Out</Button>
          <br></br>
        </Grid.Column>
        </Card>

        <Grid.Column width={8}>
          <Card>
            <CardContent>
              <Image circular src="/images/dandakine.jpg"/>
              <Button>Upload Image</Button>


              <GridRow>
                <Header textAlign='left'>Name</Header>
                <Input verticalAlign='left' foucs placeholder='name'/> <Button>Submit</Button>

              </GridRow>
             
              <GridRow>
                <Header textAlign='left'>Number</Header>
                <Input verticalAlign='left' foucs placeholder='(808)555-5555'/> <Button>Submit</Button>
              </GridRow>
             
              <GridRow>
                <Header textAlign='left'>Change Password</Header>
                <Input verticalAlign='left' foucs placeholder='current password'/>
                <Input verticalAlign='left' foucs placeholder='new password'/>
                <Input verticalAlign='left' foucs placeholder='confirm password'/> <Button>Submit</Button>
              </GridRow>

            </CardContent>
          </Card>
        </Grid.Column>

      </Grid>
    );
  }
}

export default Landing;
