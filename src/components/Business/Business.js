import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    const { name, address, city, state, category, rating, reviewCount } = this.props.business;
    return(
      <div className="Business">
        <div className="image-container">
          <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
        </div>
        <h2>{name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
          </div>
          <div className="Business-reviews">
            <h3>{category}</h3>
            <h3 className="rating">{rating}</h3>
            <p>{reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Business;
