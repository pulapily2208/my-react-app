import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const CheckNotLogged = (OriginalComponent) => {
    const ExtendsComponent = () =>{
        const navigate = useNavigate();
        const logged = useSelector(({Auth}) => Auth.login.logged);
        return logged ? <OriginalComponent /> : <Navigate to="/login" />;

    }
  return ExtendsComponent;
};

export default CheckNotLogged

