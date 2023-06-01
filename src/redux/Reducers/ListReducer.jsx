import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mangSV:[
        {
            maSinhVien:'1',
            hoTen:'Linh',
            soDienThoai:'088889999',
            email:'ghh@gmail.com'
        },
       
        
    ]

}

const ListReducer = createSlice({
  name: 'listReducer',
  initialState,
  reducers: {
    addStudentAction:(state,action) => {
        let values = {...action.payload};
        state.mangSV.push(values);
       
    },
    delStudentAction:(state,action) => {
        let indexDel = state.mangSV.findIndex(sv => sv.maSinhVien === action.payload);
        if(indexDel !== -1){
            state.mangSV.splice(indexDel,1);
        }
    },
    editStudentAction:(state,action) => {
        let svEdit = state.mangSV.find(sv => sv.maSinhVien === action.payload);
        if(svEdit){
            let arrInput = document.querySelectorAll('form input');
            for(let input of arrInput){
                let {id} = input;
                input.value = svEdit[id];
            }
        }
    }


  }
});

export const {addStudentAction,delStudentAction,editStudentAction} = ListReducer.actions

export default ListReducer.reducer