import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Nav from './Nav'
import EditOrder from './EditOrder'
import axios from 'axios'
import {FaTrash,FaEdit} from 'react-icons/fa'
export default class OrdersAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            stateNow: -1,
            idNow: -1,
            idUser: '',
            data: '',
            idproduct: -1,
            columns: [
                {
                    name: 'ID',
                    width:'50px',
                    style: {
                        backgroundColor: 'rgb(105, 21, 184)',
                        color: 'white'},
                    center:'true',
                    selector: row => row.id
                },
                {
                    name: 'ID User',
                    width:'300px',
                    selector: row => row.iduser
                },
                {
                    name: 'Date',
                    selector: row => row.date
                },
                {
                    name: 'ID Product',
                    center:'true',
                    selector: row => row.idproduct
                },
                {
                    name: 'Status',
                    selector: row =>
                        <div>
                            {row.state == 1 &&
                                <select disabled>
                                    <option selected>Done</option>
                                    <option>Assembly</option>
                                </select>
                            }
                            {row.state == 0 &&
                                <select disabled>
                                    <option>Done</option>
                                    <option selected>Assembly</option>
                                </select>
                            }
                        </div>
                },
                {
                    name: "Action",
                    style: {
                        cursor: 'pointer'},
                    cell: row => (
                        <div>
                            <FaEdit style={{fontSize:'20px',color:'rgb(105, 21, 184)' }} onClick={() => {
                                this.EditNow(); this.setState({
                                    stateNow: row.state,
                                    idNow: row.id,
                                    idUser: row.iduser,
                                    data: row.date,
                                    idproduct: row.idproduct
                                })
                            }}></FaEdit>
                            {/* <button className='btn btn-primary' onClick={() => {
                                this.EditNow(); this.setState({
                                    stateNow: row.state,
                                    idNow: row.id,
                                    idUser: row.idUser,
                                    data: row.date,
                                    idproduct: row.idProduct
                                })
                            }} >Edit</button> */}
                            <FaTrash style={{ marginLeft: '20px', fontSize:'20px',color:'red' }} className='delete-icon' onClick={() => this.DeleteById(row.id)}/>
                            {/* <button style={{ marginLeft: 10 }} className='btn btn-danger' onClick={() => this.DeleteById(row.id)}>Delete</button> */}
                        </div>
                    )
                }
            ],
            records: this.props.data
        }
        this.EditNow = this.EditNow.bind(this)
        this.DeleteById = this.DeleteById.bind(this)
        this.setStateNow = this.setStateNow.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
    }
    render() {
        return (
            <div className='px-3'>
                <Nav Toggle={this.props.Toggle} />
                <div className='container mt-5'>
                    <div className='text-end'>
                        <input style={{marginBottom:50,width:'100%'}} className='inp-admin' type="text" placeholder='Search...' onChange={this.handleFilter}/>
                    </div>
                    <DataTable title='Orders' columns={this.state.columns} data={this.state.records} fixedHeader pagination></DataTable>
                    {this.state.isEdit && <EditOrder stateNow={this.state.stateNow} setStateNow={this.setStateNow} edit={this.EditNow} />}
                </div>
            </div>
        )
    }
    handleFilter(event){
        const newDate = this.props.data.filter(row => {
            return row.iduser.includes(event.target.value)
        })
        this.setState({records: newDate})
    }
    EditNow() {
        this.setState({ isEdit: !this.state.isEdit })
    }
    async setStateNow(state) {
        this.setState({ stateNow: state })
        await axios.post(`https://localhost:7031/api/ControllerClass/update-order`, {
            "id": this.state.idNow,
            "iduser": `${this.state.idUser}`,
            "date": `${this.state.data}`,
            "idproduct": this.state.idproduct,
            "state": state
        })
            .then(res => {
            })
        for (let i = 0; i < this.state.records.length; i++) {
            if (this.state.records[i].id === this.state.idNow) {
                const mas = [...this.state.records]
                mas.splice(i, 1, { id: this.state.idNow, iduser: this.state.idUser, date: this.state.data, idproduct: this.state.idproduct, state: state })
                this.setState({ records: mas })
            }
        }
        this.props.updateOrders()
    }
    async DeleteById(id) {
        if(window.confirm("Are you sure to delete?") === true){
            const tempArr = this.state.records.filter((el) => { return el.id != id })
            this.setState({ records: tempArr })
            await axios.post(`https://localhost:7031/api/ControllerClass/delete-order?id=${id}`)
                .then(res => {
                })
                this.props.updateOrders()
        }
    }
}