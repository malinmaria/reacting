import React, { Component } from 'react';
import Greeting from '../components/Greeting'; // <-- need to bring in the component

class About extends Component {
  render() {
    return (
      <div>
        {/* Use the Greeing component here */}
        <Greeting />
      </div>
    );
  }
}

export default About;
