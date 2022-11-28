import { HOME__ICON} from '../images';
import { EXPLORE__ICON } from '../images';
import { NOTIFICAION__ICON } from '../images';
import { MASSEGE__ICON } from '../images';
import { BOOKMARKS__ICON } from '../images';
import { LISTS__ICON } from '../images';
import { PROFILE__ICON } from '../images';
import { MORE__ICON } from '../images';
import MenuItem from './menu item';

function SideMenu(){

    const menu = [
        {
            icon: HOME__ICON,
            name: "Home",
        },
        {
            icon: EXPLORE__ICON,
            name: "Explore",
        },
        {
            icon: NOTIFICAION__ICON,
            name: "Notifications",
        },
        {
            icon: MASSEGE__ICON,
            name: "Masseges",
        },
        {
            icon: BOOKMARKS__ICON,
            name: "Bookmarks",
        },
        {
            icon: LISTS__ICON,
            name: "Lists",
        },
        {
            icon: PROFILE__ICON,
            name: "Profile",
        },
        {
            icon: MORE__ICON,
            name: "More",
        },
    ]


    return(
        <div className='menu'>
            <img className='menu__img' src={require('../../images/twitter.png')}/>
            {menu.map((item, index)=><MenuItem item={item} key={index}/>)}

            <div className='menu__bth'>
                <button>Tweet</button>
            </div>  
        </div>
    )
}

export default SideMenu;