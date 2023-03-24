import React from 'react'
import setShowMenu from './Navigation'
import { Link } from "react-router-dom"

function NavigationMenu(){
    return (
        <div>
            <div className="py-6 text-center text-white bg-sky-600 font-semibold text-lg md:text-2xl">شركة اعتمد المحدودة</div>
            <ul className='m-auto text-center bg-sky-500 text-white text-lg md:text-2xl'>
                <li>
                    <Link 
                        to="/" 
                        className="py-5 border-b border-sky-600 block"
                        onClick={() => setShowMenu(false)}
                    >
                        الرئيسية
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="py-5 border-b border-sky-600 block"
                        onClick={() => setShowMenu(false)}
                    >
                        نبذة عنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/services" 
                        className="py-5 border-b border-sky-600 block"
                        onClick={() => setShowMenu(false)}
                    >
                        خدماتنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/vision" 
                        className="py-5 border-b border-sky-600 block"
                        onClick={() => setShowMenu(false)}
                    >
                        رؤيتنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/letter" 
                        className="py-5 border-b border-sky-600 block"
                        onClick={() => setShowMenu(false)}
                    >
                        رسالتنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/features" 
                        className="py-5 border-b border-sky-600 block"
                        onClick={() => setShowMenu(false)}
                    >
                        مميزاتنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className="py-5 border-b border-sky-600 block"
                        onClick={() => setShowMenu(false)}
                    >
                        تواصل معنا
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu