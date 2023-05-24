import React, { Component, useEffect } from 'react'
import axios from 'axios'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
            categories: [],
            filters:[
            {
              id:1,
              title:'No filters'
            },
            {
              id:2,
              title:'At a price to more'
            },
            {
              id:3,
              title:'At a price to lower'
            },
            {
              id:4,
              title:'Alphabetically from A-Z'
            },
            {
              id:5,
              title:'Alphabetically from Z-A'
            }
          ],
          filterNow:1
        }
    }
    componentDidMount() {
        axios.get(`https://localhost:7031/api/ControllerClass/get-all-category`)
          .then(res => {
            const rest = res.data.value;
            this.setState({categories: rest });
          })
      }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.id} onClick={()=> setTimeout(this.props.chooseCategory,1,el.id)}>
                {el.title}
            </div>
        ))}
        <select onChange={(e)=> setTimeout(this.props.filter,1,this.state.filters[e.target.selectedIndex].id)}>
          {this.state.filters.map((el)=>(
            <option key={el.id}>{el.title}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default Categories