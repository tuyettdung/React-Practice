import { createSlice } from '@reduxjs/toolkit'

const initialState = {
maSinhVien:'',
hoTen:'',
soDienThoai:'',
email:''
}

const FormReducer = createSlice({
  name: 'formReducer',
  initialState,
  reducers: {
    handleChangeFormAction:(state,action) => {
        const {id,value} = action.payload;
        state[id] = value;
    },
    

  }
});

export const {handleChangeFormAction} = FormReducer.actions

export default FormReducer.reducer