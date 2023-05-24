import React, { useState } from 'react'

export default function EditCategory(props) {
    const [newtitle,setNewTitle] = useState(props.titleNow)
  return (
    <div className='full-item'>
    <div>
        <h3 style={{textAlign:'center'}}>Category update</h3>
        <input className='inp-admin' type='text' placeholder='Title' value={newtitle} onChange={(e)=> setNewTitle(e.target.value)}></input>
        <div style={{width:100, borderRadius:10,background:'rgb(105, 21, 184)'}} className='addToBucket' onClick={() => {props.editCategory(props.id,newtitle)}  }>Save</div>
        <div style={{width:100, borderRadius:10,marginRight:'20%',background:'rgb(247, 106, 106)'}} className='addToBucket' onClick={()=>props.setEdit()} >Back</div>
    </div>
</div>
  )
}
