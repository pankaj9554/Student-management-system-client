import React, { useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import {UserContext} from "../App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Logout = () => {
    // promises 
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();

        
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({ type: 'USER', payload: false });
            history.push('/login', { replace: true });
            if (res.status !== 200) {
                toast.success('🦄  logout Successfull', {
                    position: "top-center",
                    autoClose: 2000,
                
                })


                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return (
        <>
           <h1>Logout ka page</h1> 

           <ToastContainer 
position="top-center"
autoClose={2000}  
                                />
        </>
    )
}

export default Logout
