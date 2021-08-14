import React from 'react';
import { Popup, Grid, Image, Card, CardContent, CardHeader, CardDescription, GridRow, Button, CardMeta, GridColumn, PopupContent } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>

        <Grid.Column width={8}>
          <Card fluid>
            <CardContent>
              <Image size='medium' circular src="/images/MaiTai.jpeg"/>
              <br></br>
              <br></br>

              <Button style={{backgroundColor:'#61bd94'}}>Change Image</Button>
              <br></br>
              <br></br>
              <CardHeader>Mai Tai's Bar And Grill</CardHeader>
              <CardDescription>Casual Outdoor Ocean Side Restaurant and Bar</CardDescription>
     
              <CardMeta>Located steps away from world famous Ala Moana Beach Park</CardMeta>
                <br></br>

        
           
                <Button style={{backgroundColor:'#61bd94'}}>Edit Name and Description</Button>
            
                


              
              <br></br>
              <br></br>
              <CardDescription><strong>Hours:</strong> 12:00 PM to 1:00 AM</CardDescription>
              <br></br>
              <Button style={{backgroundColor:'#61bd94'}}>Edit Hours of Operation</Button>
<br></br>
<br></br>
              <GridRow >
                
                <GridColumn>
                <Button style={{backgroundColor:'#61bd94'}}>Change Seating</Button>
                </GridColumn>

               

                
              </GridRow>


            



            </CardContent>
          </Card>
        </Grid.Column>

      </Grid>
    );
  }
}

export default Landing;
