import React from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"
import Shops from '../../pages/Shops'
import Articles from '../../pages/Articles'
import Home from '../../pages/Home'
import LoginNavigation from './LoginNavigation'
import LoginForm from './LoginForm'
import PostArticle from '../PostArticle'
// CSS
import './Header.css'


const HeaderMenu = () => {

    return (
        <Router>
            {/* Menu responsive  */}


            <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/all_shops">Shop</Link></li>
                        <li><Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/all_articles">Articles</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="order-1 md:order-2">
                <Link className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " to="/">
                    <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                    </svg>
                    FRESH DEALS
                </Link>
            </div>

            
    <LoginNavigation/>
        </div>
    </nav>




            {/* <div classNameName="navigation_menu">
            <div classNameName="toggle-button">
                <button classNameName="toggle-active" onClick={(e)=>showMenu(e)}>Menu</button>
            </div>
                <ul classNameName={show == true ? "left_header_menu" : "hide_menu"}>
                    
                    <li>
                        <Link to="/all_articles">Toutes les annonces</Link>
                    </li>
                    <li>
                    
                        <Link to="/all_shops">Boutiques</Link>
                    </li>
                </ul>

                <div classNameName="brand_logo">
                    <Link  to="/"><span><img src={basket} alt=""/> FRESH SHOP</span></Link>
                </div>
                
            </div> */}
            <Switch>
                    <Route path="/post_article">
                        <PostArticle/>
                    </Route>
                    <Route path="/login">
                        <LoginForm/>
                    </Route>
                    <Route path="/all_articles">
                        <Articles/>
                    </Route>
                    <Route path="/all_shops">
                        <Shops/>
                    </Route>
                    <Route path="/">
                        <Home/> 
                    </Route>
            </Switch> 
        </Router>
    )
}


export default HeaderMenu;