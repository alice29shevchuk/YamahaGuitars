import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
export class CardPopular extends Component {
  render() {
    return (
        <div className='cardPopular'>
            <div class="card_box">
                <span></span>
                <img src={this.props.item.image} />
                <h4>{this.props.item.title}</h4>
                <p>{this.props.item.model}</p>
                <div style={{marginLeft:'20px',marginTop:'-15px'}}>
                <StarRatings
                    rating={this.props.item.rating}
                    starRatedColor="rgb(105, 21, 184)"
                    starDimension="20px"
                    starSpacing="15px"
                />
                </div>
            </div>
         </div>
    )
  }
}

export default CardPopular