import React, { Component } from 'react';
import axios from 'axios';
import Attraction from './AttractionDetails'

class Nightlife extends Component {
  constructor(props) {
    super(props);
    this.state = { cincies: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/attractions/')
      .then(response => {
        const nightAttractions = response.data.filter(cincy => cincy.category === 'Nightlife');
        this.setState({ cincies: nightAttractions });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  attractionList() {
    return this.state.cincies.map(currentAttraction => {
      return <Attraction cincy={currentAttraction} key={currentAttraction.name} />;
    });
  }
  render() {
    return (
      <div>
        <h2 className='center mt-3'>Nightlife Attractions</h2>
        <div className="container-fluid">
          <div className='d-flex flex-wrap'>
            {this.attractionList()}
          </div>
        </div>
      </div>
    );
  };
};
export default Nightlife