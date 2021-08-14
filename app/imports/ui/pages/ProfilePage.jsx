import React from 'react';
import { Grid, Image, Card, CardContent, CardHeader, CardDescription, GridRow, Header, Input, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      
      <Grid id='landing-page' verticalAlign='left' textAlign='center' container>

        <Grid.Column width={8}>
          <Card fluid>
            <CardContent>
            <Header textAlign='middle'>Dan Dakine</Header>
              <Image circular src="/images/dandakine.jpg"/>
             
              <Button style={{backgroundColor:'#61bd94'}}>Upload Image</Button>


              <GridRow>
                <Header textAlign='left'>Name</Header>
                <Input fluid verticalAlign='left' foucs placeholder='name'/> <Button style={{backgroundColor:'#61bd94'}}>Submit</Button>

              </GridRow>
             
              <GridRow>
                <Header textAlign='left'>Number</Header>
                <Input fluid verticalAlign='left' foucs placeholder='(808)555-5555'/> <Button style={{backgroundColor:'#61bd94'}}>Submit</Button>
              </GridRow>
             
              <GridRow>
                <Header textAlign='left'>Change Password</Header>
                <Input fluid verticalAlign='left' foucs placeholder='current password'/>
                <br></br>
                <Input fluid verticalAlign='left' foucs placeholder='new password'/>
                <br></br>
                <Input fluid verticalAlign='left' foucs placeholder='confirm password'/> <Button style={{backgroundColor:'#61bd94'}}>Submit</Button>
              </GridRow>

            </CardContent>
          </Card>
        </Grid.Column>

      </Grid>
    );
  }
}

export default Landing;