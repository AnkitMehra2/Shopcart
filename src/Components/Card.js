import React from 'react';

function Card(props){
    return(
      <div className='card'>
        <div className='img'>
            <img className='rounded' src={props.img} alt='dummy alt'/>
        </div>
        <div>
           <strong> <h4 className='title'>{props.title}</h4></strong>
           <p className='description'>{props.description}</p>
            <strong> <h4 className='price'>{props.price}</h4></strong>
            <h3 className='category'>{props.category}</h3>
            <p className='rating'>{props.rating}</p>
            <button className='cart'>Add to CART</button>
            <button className='cart'>WishList</button>
        </div>
      </div>
    )
}

export default Card;