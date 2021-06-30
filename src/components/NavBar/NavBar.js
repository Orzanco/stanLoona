import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
function NabVar() {
    const categoryList = ["Photocards","Albums","Lighsticks"];
    const categoryClick = () =>
    {
      
    }
    return (
        <div  className="navBar">
            <label className ="centerVertical">BiBi Store </label>

            <Breadcrumbs aria-label="breadcrumb" className="white right10 centerVertical">
                {categoryList.map((element,index) => {
                    return (
                                <Link key={index} id={index} className="white right10" href="/" onClick={categoryClick}>
                                    {element}
                                </Link>
                

                    )})

                }   
            </Breadcrumbs>

                <CartWidget className ="centerVertical"/>
                
        </div>)
}

export default NabVar;