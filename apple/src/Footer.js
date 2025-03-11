import React from 'react'

const Footer = ({length}) => {
    const year = new Date(); 

  return (
    <footer>Copyright &copy; {year.getFullYear()} <br /> 
    {length} List items <br /></footer> 
    )
}

export default Footer