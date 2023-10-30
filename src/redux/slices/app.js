import { createSlice } from '@reduxjs/toolkit';
import { async } from 'emoji-mart';
import axios from "../../utils/axios";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // CONTACT, MESSAGE, SHARED DOCUMENT MEDIA OR LINK
  },
  snackbar: {
    open: null,
    severity: null,
    message: null,
  },
  users: [],
  friends: [],
  friendRequests: [],
  chat_type: null,
  room_id: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    signOut(state, action) {
      state.sidebar.open = false;
    },
    openSnackBar(state, action) {
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
    },
    closeSnackBar(state) {
      state.snackbar.open = false;
      state.snackbar.severity = null;
      state.snackbar.message = null;
    },
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequests(state, action) {
      state.friendRequests = action.payload.requests;
    },
    selectConversation(state, action) {
      state.chat_type = "individual";
      state.room_id = action.payload.room_id;
    },
  }
});

export default appSlice.reducer;

export const {
  toggleSidebar,
  updateSidebarType,
  signOut,
  openSnackBar,
  closeSnackBar,
} = appSlice.actions;

// export const showSnackbar = ({ severity, message }) => (dispatch) => {
//   dispatch(openSnackBar({ severity, message }));

//   setTimeout(() => {
//     dispatch(closeSnackBar());
//   }, 4000);
// };

export const ToggleSidebar = () => (dispatch) => {
  dispatch(toggleSidebar());
};

export const UpdateSidebarType = (type) => (dispatch) => {
  dispatch(updateSidebarType({ type }));
};

export const UpdateTab = (tab) => (dispatch) => {
  dispatch(appSlice.actions.updateTab(tab));
};

export function showSnackbar({ severity, message }) {
  return async (dispatch, getState) => {
    dispatch(
      appSlice.actions.showSnackbar({
        message,
        severity,
      })
    );

    setTimeout(() => {
      dispatch(closeSnackBar());
    }, 4000);
  };
}

export const clickedSnackBar = () => async (dispatch, getState) => {
  dispatch(appSlice.actions.closeSnackBar());
}


export function FetchUsers() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-users",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(appSlice.actions.closeSnackBar());
        dispatch(appSlice.actions.updateUsers({ users: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function FetchFriends() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-friends",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(appSlice.actions.updateFriends({ friends:response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}


export function FetchFriendRequests() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-requests",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          appSlice.actions.updateFriendRequests({ requests: response.data.data })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const SelectConversation = ({ room_id }) => {
  return  (dispatch, getState) => {
    dispatch(appSlice.actions.selectConversation({ room_id }));
  };
};
