import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Button, Icon, IconGroup, Sidebar } from 'semantic-ui-react';
// import { Roles } from 'meteor/alanning:roles';
// import 'react-pro-sidebar/dist/css/styles.css';
import { Roles } from 'meteor/alanning:roles';
import SignOutConfirmation from './SignOutConfirmation';
// import 'app/client/index.css';

/*
function CurrentPage() {
  const location = useLocation();
  console.log(location.pathname);
  return <span>Path : {location.pathname}</span>;
}
*/

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class SideNavBar extends React.Component {
  state = {
    visible: false,
    visible2: false,
  }

  handleShowClick = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  }

  handleShowClick2 = () => {
    this.setState((prevState) => ({
      visible2: !prevState.visible2,
    }));
  }

  render() {
    const { visible } = this.state;
    if (this.props.currentUser === '') {
      return ('');
    }

    return (
      <div>
        <Button style={{ position: 'fixed', zIndex: 1, top: 0, height: '100vh', borderRadius: 0 }} attached={'right'} icon color='grey' disabled={false} onClick={this.handleShowClick}>
          <Icon name='bars'/>
        </Button>
        <Sidebar
          as={Menu}
          animation='push'
          direction='left'
          icon='labeled'
          inverted
          vertical
          visible={visible}
          width='thin'
          color='grey'
          style={{ height: '100vh', minHeight: '100vh', width: '25vw' }}
        >
          <Button fluid style={{ zIndex: 2 }} icon color='grey' disabled={false} onClick={this.handleShowClick}>
            <Icon name='bars'/>
          </Button>

          {!Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item style={{ floated: 'left', width: '100%' }} key="user"
              as={NavLink} exact to="/ProfilePage" onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name='user'/>
              Profile
              </IconGroup>
            </Menu.Item>
          ) : ''}

          {!Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item style={{ floated: 'left', width: '100%' }} key="Restaurants"
              as={NavLink} exact to="/Restaurants" onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name='food'/>
              Restaurants
              </IconGroup>
            </Menu.Item>
          ) : ''}

          {!Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item style={{ floated: 'left', width: '100%' }} key="CreateReservation"
              as={NavLink} exact to="/CreateReservation" onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name='edit outline'/>
              Create Reservation
              </IconGroup>
            </Menu.Item>
          ) : ''}

          {!Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item style={{ floated: 'left', width: '100%' }} key="MyRestaurantReservations"
              as={NavLink} exact to="/MyRestaurantReservations" onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name='tasks'/>
              Restaurant Reservations
              </IconGroup>
            </Menu.Item>
          ) : ''}

          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item as={NavLink} activeClassName="active" exact to="/RestaurantHome"
              key='RestaurantHome' onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name='list'/>
                Current Reservations
              </IconGroup>
            </Menu.Item>
          ) : ''}

          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item as={NavLink} activeClassName="active" exact to="/RestOptions"
              key='RestaurantOptions' onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name='cogs'/>
                Restaurant Options
              </IconGroup>
            </Menu.Item>
          ) : ''}

          <SignOutConfirmation id="navbar-sign-out" as={NavLink} exact to="/signout" style={{ padding: 0, margin: 0 }}/>
        </Sidebar>
      </div>
    );
  }
}

// Declare the types of all properties.
SideNavBar.propTypes = {
  currentUser: PropTypes.string,
  ready: PropTypes.bool.isRequired,
  count: PropTypes.number,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const NavBarContainer = withTracker(() => {
  const curr = Meteor.user() ? Meteor.user().username : '';
  return {
    currentUser: curr,
  };
})(SideNavBar);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(NavBarContainer);
