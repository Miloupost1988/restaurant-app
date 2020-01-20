import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends React.Component {
  render() {
    return(
      <div className="BusinessList">
<<<<<<< HEAD
        {this.props.businesses.map((business, i) => {
          return <Business key={`${business} ${i}`} business={business} />;
        })}
=======
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
>>>>>>> d45a950b6399bcccead91aacf2511c19be20f29c
      </div>
    );
  }
};

export default BusinessList;
