import React from 'react'
export default function Sidebar({ChooiceCat}) {
  return (
    //green thema
    <div className='sidebar p-2' id='menuItems'>
        <div className='m-2'>
            <img src='https://europe.yamaha.com/en/common/images/yamaha_purple.svg'></img>
        </div>
        <hr className='text-dark'></hr>
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2 my-1' onClick={()=>{ChooiceCat(1)}}>
                <i className='bi bi-card-checklist fs-5 me-3'></i>
                <span>Categories</span>
            </a>
            <a className='list-group-item py-2 my-1'  onClick={()=>{ChooiceCat(2)}}>
                <i className='bi bi-table fs-5 me-3'></i>
                <span >Products</span>
            </a>
            <a className='list-group-item py-2 my-1'  onClick={()=>{ChooiceCat(3)}}>
                <i className='bi bi-people fs-5 me-3'></i>
                <span >Users & Admins</span>
            </a>
            <a className='list-group-item py-2 my-1'  onClick={()=>{ChooiceCat(4)}}>
                <i className='bi bi-basket3 fs-5 me-3'></i>
                <span >Orders</span>
            </a>
            <a className='list-group-item py-2 my-1' onClick={()=>{sessionStorage.clear(); window.location.assign('/')}}>
                <i className='bi bi-power fs-5 me-3'></i>
                <span >Log Out</span>
            </a>
        </div>
    </div>
  )
}
