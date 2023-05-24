import React, { Component } from 'react'
import { CardPopular } from './CardPopular'

export class CardPopulars extends Component {
  render() {
    return (
      <>
      <h1 style={{color:'rgb(105, 21, 184)',fontFamily:'cursive'}}>
        Popular Guitars
      </h1>
      <div className="popCards">
          {this.props.items.map(el => (<CardPopular onShowItem={this.props.onShowItem} key={el.id} item={el} />))}
      </div>
      </>
    )
  }
}

export default CardPopulars