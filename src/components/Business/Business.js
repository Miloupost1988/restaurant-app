import React from 'react';
import './Business.css';

<<<<<<< HEAD
class Business extends React.Component {
  render() {
    const { name, address, city, state, category, rating, reviewCount } = this.props.business;
=======

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

class Business extends React.Component {
  render() {
>>>>>>> d45a950b6399bcccead91aacf2511c19be20f29c
    return(
      <div className="Business">
        <div className="image-container">
          <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
        </div>
<<<<<<< HEAD
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
=======
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating}</h3>
            <p>{business.reviewCount}</p>
>>>>>>> d45a950b6399bcccead91aacf2511c19be20f29c
          </div>
        </div>
      </div>
    );
  }
};

export default Business;
