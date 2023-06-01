import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormRegister from './FormRegister'
import {delStudentAction,editStudentAction} from '../redux/Reducers/ListReducer';

 class ReactForm extends Component {
    render() {
        const {listUser} = this.props;
    return (
      <div className='container'>
       <FormRegister/>

        <table className='table mt-4'>
            <thead className='bg-dark text-white'>
                <tr>
                    <th>Mã sinh viên</th>
                    <th>Họ tên</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {listUser.map((user,index)=>{
                    return <tr key={index}>
                        <td>{user.maSinhVien}</td>
                        <td>{user.hoTen}</td>
                        <td>{user.soDienThoai}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className='btn btn-danger mx-2' onClick={()=>{
                                const action = delStudentAction(user.maSinhVien);
                                this.props.dispatch(action);
                            }}>
                                <i className='fa fa-trash'></i>
                            </button>
                            <button className='btn btn-primary' onClick={()=>{
                                const action = editStudentAction(user.maSinhVien);
                                this.props.dispatch(action);
                            }}>
                                <i className='fa fa-edit'></i>
                            </button>
                        </td>
                    </tr>
                })}
                
            </tbody>
        </table>
      </div>
    )
  }
 
}

const mapStateToProps = (state) => ({
    listUser:state.listReducer.mangSV
})



export default connect(mapStateToProps)(ReactForm)
