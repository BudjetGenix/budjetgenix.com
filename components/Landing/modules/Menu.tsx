import imgSources from '../../../services/imgSources';
import {useRef, RefObject, useState, useEffect} from "react";
import { AccountDropdown } from './AccountDropdown'



function listenOutsideClicks(menuRef: RefObject<any>, menuShown: boolean, toggleMenu: Function) {
    useEffect(() => {
        const fuc = (e: Event) => {
            if (menuRef.current.contains(e.target)) return;
            if (!menuShown) return;
            toggleMenu()
        }
        document.addEventListener("mousedown", fuc);
        return () => document.removeEventListener("mousedown", fuc)
    }, [menuShown])
}

function Menu() {
    const [menuShown, setMenuShown] = useState(false);
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState("false");

    useEffect(() => {

    }, [])

    const  toggleMenu = () => {
        setMenuShown(!menuShown);
    }

    const menuRef = useRef(null);
    listenOutsideClicks(menuRef, menuShown, toggleMenu)

    return (
        <div className='menu' ref={menuRef}>
            <div className='logo'>BudgetGenix</div>

            <div onMouseDown={toggleMenu} className='account'>
                <img src={imgSources.profile} alt='' />
            </div>
            <div>
                {
                    menuShown
                        ?   <AccountDropdown
                            loggedIn={false}
                            accountName={""}
                        />
                        : <></>
                }
            </div>

        </div>
    );
}

export default Menu;