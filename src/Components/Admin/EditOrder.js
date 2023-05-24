import React, { Component } from 'react'

export default class EditOrder extends React.Component {
    constructor(props){
        super(props)
        this.state={
            stateNow:-1,
            value:''
        }
        this.stateProcess = this.stateProcess.bind(this)
    }
  render() {
    return (
      <div className='full-item'>
        <div>
            <h3 style={{textAlign:'center'}}>Order update</h3>
                {this.props.stateNow == 0 &&
                    <select className='selectEditOrder' style={{width:'200px',height:'50px',borderColor:'rgb(105, 21, 184)',borderRadius:'20px',textAlign:'center'}} onChange={(e)=>{this.setState({value:e.target.value})}}>
                        <option selected>Assembly</option>
                        <option>Done</option>
                    </select>
                }
                {this.props.stateNow == 1 &&
                    <select className='selectEditOrder' style={{width:'200px',height:'50px',borderColor:'rgb(105, 21, 184)',borderRadius:'20px',textAlign:'center'}} onChange={(e)=>{this.setState({value:e.target.value})}}>
                        <option>Assembly</option>
                        <option selected>Done</option>
                    </select>
                }
            <div style={{width:100, borderRadius:10,background:'rgb(105, 21, 184)'}} className='addToBucket' onClick={()=>{this.stateProcess(this.state.value);this.props.edit()}} >Save</div>
            <div style={{width:100, borderRadius:10,marginRight:'20%',background:'rgb(247, 106, 106)'}} className='addToBucket' onClick={()=>this.props.edit()} >Back</div>
        </div>
      </div>
    )
  }
  stateProcess(text){
    if(text == 'Done')
    {
      this.setState({stateNow:1})
      this.props.setStateNow(1)
    }
    if(text == "Assembly"){
        this.setState({stateNow:0})
        this.props.setStateNow(0)
    }
}
}
