import imgSources from '../services/imgSources';
import { useState } from "react";

export default function Menu() {
    const [menuShown, setMenuShown] = useState(false);
    function toggleMenu() {
        setMenuShown(!menuShown)
    }

    return (
        <div className='menu'>
            <div className='logo'>BudgetGenix</div>

            <div onMouseDown={toggleMenu} className='account'>
                <img src={imgSources.profile} alt='' />
            </div>

            {
                menuShown && <div className='account-dropdown'>
                    Yipe
                </div>
            }

        </div>
    );
}
