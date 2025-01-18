import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/login";

    const handleLogout = ()=>{
        logOut().then(()=>{
            alert("Logged out successfully!");
            navigate(from,{replace: true})
        })
        .catch((error)=>{

        })
    }
  return (
    <div>
      
    </div>
  )
}

export default Logout
