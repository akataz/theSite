import React, { PropTypes } from 'react';
import Navbar from './Navbar.js';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <img src="./../assets/backgroundCity.jpg" className="img-responsive" alt="Responsive image"/>
        <div className="content">
          <Navbar />
          <br/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
