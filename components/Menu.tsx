import imgSources from '../services/imgSources';
import {useRef, RefObject, useState, useEffect} from "react";
import { AccountDropdown } from './modules/AccountDropdown'

function detectClickOutside(ref: RefObject<any>, action: Function) {
    useEffect(() => {
        const handleClick = (e: Event) => ref.current && !ref.current.contains(e.target) && action()

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);

    }, [ref]);
}

export default function Menu() {
    const [menuShown, setMenuShown] = useState(false);
    function toggleMenu() {
        setMenuShown(!menuShown)
    }

    const menuRef = useRef(null);
    detectClickOutside(menuRef, toggleMenu);

    return (
        <div className='menu' ref={menuRef}>
            <div className='logo'>BudgetGenix</div>

            <div onMouseDown={toggleMenu} className='account'>
                <img src={imgSources.profile} alt='' />
            </div>
            { menuShown && <AccountDropdown loggedIn={false} accountName={""} /> }


        </div>
    );
}
