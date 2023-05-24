import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div className='Card'>
        <div style={{textAlign:'center'}}>
          <img src={this.props.item.image} onClick={()=> this.props.onShowItem(this.props.item)}/>
        </div>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.model}</p>
        <b>Price: {this.props.item.price} грн.</b>
        <div className='addToBucket' onClick={()=> {this.props.onAdd(this.props.item);alert('Product is in shop cart!')}}>BUY</div>
      </div>
    )
  }
}

export default Card