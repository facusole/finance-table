import { Link } from 'react-router-dom'
import { useState } from 'react'

import '../css/Navbar.css'

export default function Navbar() {

    const [isActive, setIsActive] = useState(1)

    const handleClick = (index) => {
        setIsActive(index);
    }

    return(
        <div className='nav-container mg-inline padding-block'>
            <div className="tab-container">
                <Link to='/'className={isActive === 1 ? 'nav-link link-active' : 'nav-link'} onClick={() => handleClick(1)}><div>Incomes</div></Link>
                <Link to='/expenses'className={isActive === 2 ? 'nav-link link-active' : 'nav-link'} onClick={() => handleClick(2)}><div>Expenses</div></Link>
            </div>
        </div>
    )
}