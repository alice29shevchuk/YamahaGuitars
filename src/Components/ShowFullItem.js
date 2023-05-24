import React, { Component } from 'react'

export class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.model}</p>
                    <b>Price: {this.props.item.price}$</b>
                    <br></br>
                    <div style={{textAlign:'center'}}>
                        <img src={this.props.item.image} onClick={() => this.props.onShowItem(this.props.item)} />
                    </div>
                    <p>{this.props.item.description}</p>
                    <div className='addToBucket' onClick={() => this.props.onAdd(this.props.item)}>BUY</div>
                </div>
            </div>
        )
    }
}

export default ShowFullItem