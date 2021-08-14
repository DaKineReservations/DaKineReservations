import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
      <footer>
        <div style={divStyle} className="ui center aligned container">
          
          

          <a href="http://ics-software-engineering.github.io/meteor-application-template-react">Template Home Page</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
