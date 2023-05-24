import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Nav from './Nav'
import {FaTrash,FaEdit} from 'react-icons/fa'
import AddProduct from './AddProduct'
import axios from 'axios'
import EditProduct from './EditProduct'
export default class ProductsAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id:-1,
            img:'',
            title:'',
            model:'',
            price:0,
            idCat:0,
            desc:'',
            countProduct:0,
            popular:0,
            rating:0,
            columns: [
                {
                    name: 'ID',
                    width:'50px',
                    center:'true',
                    style: {
                        backgroundColor: 'rgb(105, 21, 184)',
                        color: 'white'},
                    selector: row => row.id
                },
                {
                    name: 'Image',
                    width:'100px',
                    selector: (row) => <img width={30} height={70} src={row.image}></img>
                },
                {
                    name: 'Title',
                    width:'100px',
                    selector: row => row.title
                },
                {
                    name: 'Model',
                    width:'150px',
                    selector: row => row.model
                },
                {
                    name: 'Price',
                    width:'70px',
                    selector: row => row.price
                },
                {
                    name: 'Category',
                    width:'100px',
                    selector: row => <div>  <select disabled>{
                        this.props.dataCategory.map((el) => {if(el.id == row.idCategory ){
                            return (<option selected>{el.title}</option>)
                        }
                        else if( el.id != 1){
                            return (<option>{el.title}</option>)
                        }
                    })
                    }
                    </select></div>
                },
                {
                    name: 'Description',
                    width: '100px',
                    selector: row => row.description
                },
                {
                    name: 'Count',
                    width: '100px',
                    selector: row => row.count
                },
                {
                    name: 'Rating',
                    width: '100px',
                    selector: row => row.rating
                },
                {
                    name: 'Is Popular',
                    width:'100px',
                    selector: row =>
                    <div>
                        {row.isPopular == 1 &&
                            <select disabled>
                                <option selected>True</option>
                                <option>False</option>
                            </select>
                        }
                        {row.isPopular == 0 &&
                            <select disabled>
                                <option>True</option>
                                <option selected>False</option>
                            </select>
                        }
                    </div>
                },
                {
                    name: "Action",
                    width: '200px',
                    style: {
                        cursor: 'pointer'},
                    cell: row => (
                        <div>
                            {/* <button className='btn btn-primary' >Edit</button> */}
                            <FaEdit style={{fontSize:'20px',color:'rgb(105, 21, 184)' }} onClick={()=>{
                                this.isEdit()
                                this.setState({id:row.id})
                                this.setState({img:row.image})
                                this.setState({title:row.title})
                                this.setState({model:row.model})
                                this.setState({price:row.price})
                                this.setState({idCat:row.idCategory})
                                this.setState({desc:row.description})
                                this.setState({countProduct:row.count})
                                this.setState({popular:row.isPopular})
                                this.setState({rating:row.rating})
                            }}></FaEdit>
                            <FaTrash style={{ marginLeft: '20px', fontSize:'20px',color:'red' }} className='delete-icon' onClick={()=> this.DeleteById(row.id)}/>
                            {/* <button style={{ marginLeft: 10 }} className='btn btn-danger' onClick={()=> this.DeleteById(row.id)}>Delete</button> */}
                        </div>
                    )
                }
            ],
            records: this.props.data,
            addProduct:false,
            isEdit:false
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.DeleteById = this.DeleteById.bind(this)
        this.isShow = this.isShow.bind(this)
        this.isEdit = this.isEdit.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
        this.AddProduct = this.AddProduct.bind(this)
    }
    render() {
        return (
            <div className='px-3'>
                <Nav Toggle={this.props.Toggle} />
                <div className='container mt-5'>
                    <div className='text-end'>
                        <input style={{marginBottom:50,width:'100%'}} className='inp-admin' type="text" placeholder='Search...' onChange={this.handleFilter}/>
                    </div>
                <DataTable title='Products' columns={this.state.columns} data={this.state.records} fixedHeader pagination actions={<button className='btn-add' onClick={()=>{this.isShow()}}>Create</button>}></DataTable>
                {this.state.addProduct && <AddProduct dataProduct={this.state.records} AddProduct={this.AddProduct} dataCategory={this.props.dataCategory}   isShow={this.isShow}/>}
                {this.state.isEdit && <EditProduct updateProduct={this.updateProduct} getProducts={this.props.getProducts} id={this.state.id} img={this.state.img} title={this.state.title} model={this.state.model} price={this.state.price} idCat={this.state.idCat} desc={this.state.desc}countProduct={this.state.countProduct} isPopular={this.state.popular} rating={this.state.rating}  dataCategory={this.props.dataCategory} isShow={this.isEdit}/>}
                    {/* {this.state.isAdd && <AddCategory addcat={this.addcat} isShow={this.isShow}/>} */}
                    {/* {this.state.isEdit && <EditCategory id={this.state.editID} titleNow={this.state.titleNow} editCategory={this.editCategory} setEdit={this.setEdit}/>} */}
                </div>
            </div>
        )
    }
    handleFilter(event){
        const newDate = this.props.data.filter(row => {
            return row.title.toLowerCase().includes(event.target.value.toLowerCase()) || row.model.toLowerCase().includes(event.target.value.toLowerCase())
        })
        this.setState({records: newDate})
    }
    async DeleteById(id){
        if(window.confirm('Are you sure to delete?') == true)
        {
            const tempArr = this.state.records.filter((el)=>{return el.id != id})
            this.setState({records:tempArr})
            await axios.post(`https://localhost:7031/api/ControllerClass/delete-product?id=${id}`)
          .then(res => {
      })
        }
    }
    isShow(){
        this.setState({addProduct: !this.state.addProduct})
    }
    isEdit(){
        this.setState({isEdit:!this.state.isEdit})
    }
    updateProduct = (id, image, title, model, price,idCategory, description, count, isPopular,rating) => {
        for(let i = 0; i< this.state.records.length; i ++){
          if(this.state.records[i].id === id){
            const mas = [...this.state.records]
            mas.splice(i,1,{id,image,title,model,price, idCategory,description,count,rating,isPopular})
            this.setState({records: mas})
          }
        }
    }
   async AddProduct(id_, image, title, model, price,idCategory, description, count, isPopular,rating){
       this.props.getProducts()
       setTimeout(()=>{
        const id = this.props.IdAddProduct
        const mas = [...this.state.records]
        mas.splice(this.state.records.length,1, {id,image,title,model,price, idCategory,description,count,rating,isPopular})
        this.setState({records: mas})
       },1500)      
    }
}
