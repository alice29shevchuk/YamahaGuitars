import React, { Component } from 'react'
import  useState  from 'react'

export class AddCategory extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:''
        }   
    }
    render() {
        return (
            <div className='full-item'>
                <div>
                    <h3 style={{textAlign:'center'}}>New category</h3>
                    <input className='inp-admin' type='text' placeholder='Title' onChange={(e)=> this.state.title = e.target.value}></input>
                    <div style={{width:100, borderRadius:10,background:'rgb(105, 21, 184)'}} className='addToBucket' onClick={() => {this.props.addcat(this.state.title); this.props.isShow() }}>Add</div>
                    <div style={{width:100, borderRadius:10,marginRight:'20%',background:'rgb(247, 106, 106)'}} className='addToBucket' onClick={()=>this.props.isShow()} >Close</div>
                </div>
            </div>
        )
    }
}

export default AddCategory