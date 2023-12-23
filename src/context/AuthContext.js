import { createContext, useEffect, useReducer } from "react";

const initial_state = {
  user: localStorage.getItem("user") ,
  loading: false,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN START":
      return {
        user: null,
        loading: false,
        error: null,
      };
    case "LOGIN_SUCCES":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const AuthContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, initial_state)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    },[state.user])

    return <AuthContext.Provider value={{
        user:state.user,
        loading: state.loading,
        error: state.error,
        dispatch
    }}>
        {children}
    </AuthContext.Provider>
}
