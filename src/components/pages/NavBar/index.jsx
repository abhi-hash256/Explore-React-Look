import React from 'react';
import { FaGreaterThan } from "react-icons/fa";

import { NavBarContent } from './constants/constants';

import { MainNavBarContainer } from './style/style';
import Container from './container';


const NavBar = props => {

    const { activeState } = props;

    return(
        <MainNavBarContainer>
           <div className={`${activeState ? 'drop-down content' : 'content'}`}>
                <div className="content-cart-div">
                    <ul>
                        {
                            NavBarContent.map((item, index) => {
                                const { id, name, redirectUrl } = item;
                                return(
                                    <div className='content-div'>
                                        <li key={id}><a href="#">{name}</a></li>
                                        <FaGreaterThan className='icon-img'/>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <input type="text" className='input-search' placeholder='Have a Search...'/>
                </div>
                <div className="checkout-code">
                    <button className='checkout-btn'>Checkout</button>
                </div>
           </div>
        </MainNavBarContainer>
    )
}

export default Container(NavBar);