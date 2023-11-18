import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { format } from 'date-fns';

const Card = (props) =>  {
  const api_url='http://localhost:3001'
  const deletePost = async (event) => {
    event.preventDefault();

    const options = {
        method: 'DELETE'
    }
    
    await fetch(`${api_url}/api/trips/` + props.id, options)
    window.location.href = '/'
}
  return (
      <div className="Card" style={{ backgroundImage:`url(${props.img_url})`}} >
        <div className="card-info">
          <img className="moreButton" alt="edit button" src={more} onClick={deletePost} />
          <h2 className="title">{props.title}</h2>
          <p className="description">{props.description}</p>
          <button className="priceBtn">{props.total_cost}</button>
          <button className="daysBtn">{props.num_days + " days"}</button>
          <button className='daysBtn'>Dates: {moment(props.start_date).format('MM/DD/YYYY')} - {moment(props.end_date).format('MM/DD/YYYY')}</button>
        </div>
      </div>
  );
};

export default Card;