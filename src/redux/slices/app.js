import { createSlice } from '@reduxjs/toolkit';

// 

// import  { dispatch } from '../store';

const initialState = {
    sidebar: {     
        open: false,
        type: "CONTACT", // CONTACT, MESSAGE, SHARED DOCUMENT MEDIA OR LINK
    },
};

const slice = createSlice({
    name: "app",
    initialState,
    reducers:{
        // toogle the side bar

        toogleSidebar(state,action){
            state.sidebar.open = !state.sidebar.open;
        },
            updateSidebarType(state,action){
                state.sidebar.type = action.payload.type;
        },
        signOut(state,action){
            state.sidebar.open = state.sidebar.open || false;
        },
    },

});

// export the reducer
export default slice.reducer;

// export  fucntion ToggleSidebar ()

export function ToggleSidebar(){
    return async (dispatch, getState) => { 
        dispatch(slice.actions.toogleSidebar());
    }
   
}
export function updateSidebarType(type){
    return async (dispatch, getState) => {
        dispatch(slice.actions.updateSidebarType({
            type,
        }));
    }
   
}

export function LogoutUser(){
    return async (dispatch, getState) => {
        dispatch(slice.actions.signOut());
    }
}

export const showSnackbar =
  ({ severity, message }) =>
  async (dispatch, getState) => {
    dispatch(
      slice.actions.openSnackBar({
        message,
        severity,
      })
    );

    setTimeout(() => {
      dispatch(slice.actions.closeSnackBar());
    }, 4000);
  };
