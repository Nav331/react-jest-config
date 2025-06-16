import {createSlice, PayloadAction} from "@reduxjs/toolkit"
interface User{
    id:string,
    name:string,
    password:string
}

interface userState{
    users:User[],
    errorSubmit:string | null
}

const initialState:userState={
    users:[],
    errorSubmit:null
}

 export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
      fetchUsersRequest(state){
        state.errorSubmit=null
      },
      fetchUsersSuccess(state,action:PayloadAction<User[]>){
        state.users=action.payload
      },
      fetchUsersFailure(state,action:PayloadAction<string>){
        state.errorSubmit=action.payload
      }
    }
})

export const {fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure}=userSlice.actions
export default userSlice.reducer