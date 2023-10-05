import { createSlice } from '@reduxjs/toolkit';

// 

import  { dispatch } from '../store';

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
    },

});

// export the reducer
export default slice.reducer;

// export  fucntion ToggleSidebar ()

export function ToggleSidebar(){
    return async () => { 
        dispatch(slice.actions.toogleSidebar());
    }
   
}
export function updateSidebarType(type){
    return async () => {
        dispatch(slice.actions.updateSidebarType({
            type,
        }));
    }
   
}

