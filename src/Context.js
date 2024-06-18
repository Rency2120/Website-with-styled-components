import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './Reducer'


const AppContext = React.createContext();
const initialValues = {
    name: '',
    image: "",
    services:[],
};

const API = "https://fakestoreapi.com/products";

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues)
    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: 'Rency Technical',
                image: "./images/hero.svg"
            }
        })
    }
    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: 'Rency Sakhareliya',
                image: "./images/about1.svg"
            }
        })
    }
    
    const getServices = async(url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            dispatch({ type: "GET_SERVICES", payload: data });
            console.log(data)
        }
        catch(error){
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getServices(API);
    },[])
    
    return (
        <AppContext.Provider value={{...state, updateAboutPage, updateHomePage }}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppProvider, useGlobalContext }
