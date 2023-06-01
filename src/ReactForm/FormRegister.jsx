import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleChangeFormAction} from '../redux/Reducers/FormReducer';
import {addStudentAction} from '../redux/Reducers/ListReducer';

class FormRegister extends Component {

    handleChange = (e) => {
        const {id,value} = e.target;
        const payload = {
            id:id,
            value:value
        }
        const action = handleChangeFormAction(payload);
        this.props.dispatch(action);

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const values = this.props.user;
        const action = addStudentAction(values);
        this.props.dispatch(action);
    }

    render() {
        return (
          <form className='card mt-3' onSubmit={this.handleSubmit}>
            <div className='card-header'>
            <h3>Thông tin sinh viên</h3>
            </div>
            <div className='card-body'>
            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                        <p>Mã sinh viên</p>
                        <input id='maSinhVien' className='form-control' onChange={this.handleChange}  />
                    </div>
                    <div className='form-group mt-4'>
                        <p>Số điện thoại</p>
                        <input id='soDienThoai' className='form-control'  onChange={this.handleChange} />
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-group'>
                        <p>Họ tên</p>
                        <input id='hoTen' className='form-control' onChange={this.handleChange} />
                    </div>
                    <div className='form-group mt-4'>
                        <p>Email</p>
                        <input id='email'className='form-control'  onChange={this.handleChange} />
                    </div>
                </div>
            </div>
            <button className='btn btn-success mt-3' type='submit'>Thêm sinh viên</button>
            <button className='btn btn-danger mt-3 mx-3'>Cập nhật</button>
            </div>
          </form>
        )
      }
}

const mapStateToProps = (state) => ({
 user:state.formReducer
})



export default connect(mapStateToProps)(FormRegister)