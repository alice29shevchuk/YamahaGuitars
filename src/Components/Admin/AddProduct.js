import React, { Component } from 'react'
import axios from 'axios'

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      img: '',
      title: '',
      model: '',
      price: 0,
      idCat: 0,
      desc: '',
      countProduct: 0,
      isPopular: 1,
      showImg: false,
      rating:0
    }
    this.SelectCategory = this.SelectCategory.bind(this)
    this.SelectIsPopular = this.SelectIsPopular.bind(this)
    this.UploadFile = this.UploadFile.bind(this)
    this.AddProduct = this.AddProduct.bind(this)
  }
  render() {
    return (
      <div className='full-item'>
        <div>
          <h3 style={{textAlign:'center'}}>New product</h3>
          <div className='add-product'>
            {this.state.showImg &&
              <img src={this.state.img} alt="photo" />
            }
            <input type='file' className='uploadPhoto' style={{marginLeft:'25%'}} onChange={(e) => { this.UploadFile(e.target.files[0]) }} />
            <input type='text' className='inp-admin' placeholder='Title' onChange={(e) => { this.setState({ title: e.target.value }) }}></input>
            <input type='text' className='inp-admin' placeholder='Model' onChange={(e) => { this.setState({ model: e.target.value }) }}></input>
            <input min={0} type='number' className='inp-admin' placeholder='Price' onChange={(e) => { this.setState({ price: e.target.value }) }}></input>
            <select className='selectEditOrder' style={{width:'200px',height:'50px',marginLeft:'30%', borderColor:'rgb(105, 21, 184)',borderRadius:'20px',textAlign:'center'}} onChange={(e) => { this.SelectCategory(e.target.value) }}>
              {this.props.dataCategory.map((el) => {
                if (el.id != 1)
                  return (<option>{el.title}</option>)
              }
              )}
            </select>
            <input type='text' className='inp-admin' placeholder='Description' onChange={(e) => { this.setState({ desc: e.target.value }) }}></input>
            <input min={0} type='number' className='inp-admin' placeholder='Count of product' onChange={(e) => { this.setState({ countProduct: e.target.value }) }}></input>
            <input min={0} max={5} type='number' className='inp-admin' placeholder='Rating' onChange={(e) => { this.setState({ rating: e.target.value }) }}></input>
            <select className='selectEditOrder' style={{width:'200px',height:'50px',marginLeft:'30%', borderColor:'rgb(105, 21, 184)',borderRadius:'20px',textAlign:'center'}} onChange={(e) => { this.SelectIsPopular(e.target.value) }}>
              <option>True</option>
              <option>False</option>
            </select>
          </div>
          <div style={{ width: 100, borderRadius: 10, background:'rgb(105, 21, 184)'}} className='addToBucket' onClick={() => { this.AddProduct() }}>Save</div>
          <div style={{ width: 100, borderRadius: 10, marginRight: '20%',background:'rgb(247, 106, 106)' }} className='addToBucket' onClick={() => this.props.isShow()} >Back</div>
        </div>
      </div>
    )
  }
  SelectCategory(text) {
    for (const iterator of this.props.dataCategory) {
      if (iterator.title === text) {
        this.setState({ idCat: iterator.id })
      }
    }
  }
  SelectIsPopular(text) {
    if (text === "True") {
      this.setState({ isPopular: 1 })
    }
    else {
      this.setState({ isPopular: 0 })
    }
  }
  UploadFile(file) {
    const data = new FormData()
    if (file != null) {
      data.append('file', file)
      axios.post(`https://localhost:7031/api/AWS/upload-file-to-aws`, data)
        .then(res => {
          this.setState({ img: `https://ishopbucket.s3.eu-west-2.amazonaws.com/${file.name}` })
          this.setState({ showImg: true })
        })
    }
  }
  async AddProduct() {
    await axios.post(`https://localhost:7031/api/ControllerClass/add-product`, {
        "id": this.state.id,
        "title": `${this.state.title}`,
        "model":`${this.state.model}`,
        "description":`${this.state.desc}`,
        "image":`${this.state.img}`,
        "price":this.state.price,
        "count":this.state.countProduct,
        "rating":this.state.rating,
        "idCategory":this.state.idCat,
        "isPopular":this.state.isPopular
    })
      .then(res => {
        const mas = this.props.dataProduct
        const id = mas.length+1
        this.props.AddProduct(id, this.state.img, this.state.title, this.state.model, this.state.price, this.state.idCat, this.state.desc, this.state.countProduct, this.state.isPopular,this.state.rating)
      })
      this.props.isShow()
  }
}