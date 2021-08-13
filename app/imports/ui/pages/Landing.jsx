import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import Tilt from 'react-parallax-tilt';

/** A simple static component to render some text for the landing page. */
export default class Landing extends React.Component {
  render() {
    const gridStyle = { height: '100vh' };
    const imageStyle = { size: 'large' };
    const align = {
      textAlign: 'center',
      color: 'white',
      filter: 'drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.2))',
      paddingRight: '25px',
      paddingLeft: '25px',
    };
    return (
      <div className='landing-background'>
        <Grid style={gridStyle} verticalAlign='middle' textAlign='center' container columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Tilt trackOnWindow={true} tiltReverse={true} style={imageStyle}>
                <Image src="/images/DakineReservations.png" centered/>
              </Tilt>
              <Grid.Row textAlign='center'>
                <div style={align}>
                  <Header inverted as="h3">Reservations for locals</Header>
                  <p>Ho brah you need one reservation?
                    Get a table just for locals,
                    fast kine action.</p>
                </div>
              </Grid.Row>
              <Grid.Row>
                <a href="#/signin" className="animated-button6">
                  <span/>
                  <span/>
                  <span/>
                  <span/>Sign In
                </a>
                <a href="#/signup" className="animated-button6-rev">
                  <span/>
                  <span/>
                  <span/>
                  <span/>Sign Up
                </a>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
