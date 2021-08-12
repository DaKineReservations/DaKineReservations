import React from 'react';
import { Grid, Image, Card, CardContent, CardHeader, CardDescription } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>

        <Grid.Column width={4}>
          <Image size='small' circular src="/images/meteor-logo.png"/>
        </Grid.Column>

        <Grid.Column width={8}>
          <Card>
            <CardContent>
              <CardHeader>Mai Taiʻs</CardHeader>
              <CardDescription>
                Live music, cheap beers, and tasty food!
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardHeader>Da Spot</CardHeader>
              <CardDescription>
                Live music, cheap beers, and tasty food!
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent>
              <CardHeader>Appetito</CardHeader>
              <CardDescription>
                Live music, cheap beers, and tasty food!
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardHeader>La Pina</CardHeader>
              <CardDescription>
                Live music, cheap beers, and tasty food!
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardHeader>Shore Fyre</CardHeader>
              <CardDescription>
                Live music, cheap beers, and tasty food!
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardHeader>Maui Brewing Co.</CardHeader>
              <CardDescription>
                Live music, cheap beers, and tasty food!
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardHeader>Deck</CardHeader>
              <CardDescription>
                Live music, cheap beers, and tasty food!
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardHeader>Basalt</CardHeader>
              <CardDescription>
                Live music, cheap beers, and tasty food!
              </CardDescription>
            </CardContent>
          </Card>

        </Grid.Column>

      </Grid>
    );
  }
}

export default Landing;
