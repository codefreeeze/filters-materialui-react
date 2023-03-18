import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const ListItem = ({
  
  item: {id, image, title, price, },
}) => (

  <div className="card my-5 py-4" style={{width:"18rem"}}>
    <img className="card-img-top" style={{height:"270px"}} src={image}alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title.substring(0, 16)}...</h5>
      <p className="card-text">${price}</p>
      <NavLink to={`/products/${id}`} style={{ width: "100%" }} className="add btn btn-outline-dark">By Now</NavLink>
    </div>
  </div>
);

export default ListItem;
