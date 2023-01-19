import s from './Header.module.css'
import {MdPerson, MdSearch} from "react-icons/md";
import Menu from "./Menu/Menu";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <Link to={'/'}>
                <img style={{height: 56}} src="../../mock/logo.jpg" alt="logo"/>
            </Link>
            <div>
                <Menu/>
            </div>
            <div className={s.info}>
                <Link to={'/'} className={s.searchLogo}>
                    <MdSearch size={30}/>
                </Link>
                <Link to={'/'} className={s.profileLogo}>
                    <MdPerson size={30}/>
                </Link>
            </div>
        </header>
    );
};

export default Header;
