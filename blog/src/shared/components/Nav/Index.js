import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem/Index";
import './style.scss';

const Nav = (props) => {
    const links = [{name: 'Home', url: '/'}, {name: 'Blog', url: '/blog'}, {name: 'Contact', url: '/contact'}, {name: 'About', url: '/about'}]


    const [isExpanded, setIsExpanded] = useState(false)

    return <div className='nav'>
        <div className="brandmenu">
            <Link className="brandname" to={"/"}>{props.brandname}</Link>
            <Link className="burger-menu" to={"#"} onClick={() => setIsExpanded(!isExpanded)} ><img width={45} height={45} src="/burger-menu.svg"/> </Link>
        </div>

        <div className={isExpanded ? 'nav-item-list expand' : 'nav-item-list'}>
             {links.map(link =>  <NavItem name={link.name} url={link.url} />)}
        </div>
       
    </div>
}

export default Nav;