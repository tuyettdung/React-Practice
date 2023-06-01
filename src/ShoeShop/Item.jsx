import React, { Component } from 'react'

export default class Item extends Component {
  render() {

    let {renderProductDetail, shoe} = this.props;
    return (
        <div className='card h-100'>
          <img src={shoe.image} alt="" className='w-100'/>
          <div className='card-body'>
            <p style={{fontWeight:'700',fontSize:'16px'}}>{shoe.name}</p>
            <p style={{fontWeight:'500',color:'blue',fontSize:'18px'}}>{shoe.price}</p>
            <p style={{fontSize:'14px'}}>{shoe.shortDescription}</p>
            <button className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#modelId" onClick={()=>{
                renderProductDetail(shoe)
            }}>
                More Detail</button>
          </div>
        </div>
    )
  }
}
