import {IMenuList} from "../../../common/types/Header/MenuType";
import s from "./Menu.module.css";
import MDIcon from "../../../common/MDIcon";
import {Link} from "react-router-dom";

const Menu = () => {
    const menuList: IMenuList[] = [
        {id: 1, text: 'Discover', icon: 'MdHomeFilled'},
        {id: 2, text: 'Live TV', icon: 'MdLiveTv'},
        {id: 3, text: 'TV Shows', icon: 'MdTv'},
        {id: 4, text: 'Movies', icon: 'MdMovie'},
        {id: 5, text: 'My Stuff', icon: 'MdPersonOutline'},
    ]

    return (
        <div className={s.menu}>
            {menuList.map(m => (
                <Link to={'/'} key={m.id} className={s.menuItem}>
                    <MDIcon iconName={m.icon}/>
                    <p>
                        {m.text}
                    </p>
                </Link>

            ))}
        </div>
    );
};

export default Menu;
