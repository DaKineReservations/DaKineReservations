import React from 'react';
import { Grid, Image, Card, CardContent, CardHeader, CardDescription, GridRow, Header, Input, Button, CardMeta } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>

        <Grid.Column width={8}>
          <Card fluid>
            <CardContent>
              <Image circular src="/images/MaiTai.jpeg"/>

              <Button color='blue'>Edit Logo</Button>
              <br></br>
              <br></br>
              <CardHeader>Mai Tai's Bar And Grill</CardHeader>
              <CardDescription>Casual Outdoor Ocean Side Restaurant and Bar</CardDescription>
              <br></br>
              <CardMeta>Located steps away from world famous Ala Moana Beach Park</CardMeta>

              <Button color='blue'>Edit Name/Description</Button>
              <br></br>
              <br></br>
              <CardDescription>Hours: 12:00 PM to 1:00 AM</CardDescription>
              <br></br>
              <Button color='blue'>Edit Hours of Operation</Button>

            



            </CardContent>
          </Card>
        </Grid.Column>

      </Grid>
    );
  }
}

export default Landing;
