import React, { Component } from 'react'
import {FaTrash} from 'react-icons/fa'

export class Order extends Component {
    constructor(props){
        super(props)
        this.state={
            countProduct: 1
        }
    }
    render() {
        return (
            <div className='item'>
                <img src={this.props.item.image} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.model}</p>
                <b>Price: {this.props.item.price} грн.</b>
                {/* <div class="number">
                    <button className="number-minus" type="button" onClick={()=>{this.setState({countProduct: this.state.countProduct - 1})}}>-</button>
                    <input type="number" min="0" value={this.state.countProduct} readonly />
                    <button className="number-plus" type="button" onClick={()=>{this.setState({countProduct: this.state.countProduct + 1})}}>+</button>
                </div> */}
                <FaTrash className='delete-icon' onClick={()=> this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}

export default Order