import React from 'react';

function IsLogged({ isLogged, children }) {
  const checkLoggedStatus = () => {
    //via localStorage
    return localStorage.getItem('isLogged');
  };
  return <>{isLogged ? children[0] : children[1]}</>;
}

export default IsLogged;
