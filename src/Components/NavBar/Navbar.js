import classes from './Navbar.module.css';
import Backdrop from '../Backdrop/Backdrop'
import { useState } from 'react';
const Navbar = ()=>{
    const [backdrop, setbackdrop] = useState(false)
    const displayBackdrop = ()=>{
        setbackdrop(!backdrop)
    }
    return (<>
          
                <Backdrop toggleBackdrop={displayBackdrop} state={backdrop}>

                </Backdrop>
                <div onClick={displayBackdrop} className={classes.navbar}>
                    <nav>
                        <div className={classes.navbarNav}>

                        </div>
                        <div className={classes.navbarNav}>

                        </div >
                        <div className={classes.navbarNav}>

                        </div>
                    </nav>
                </div>
            </>)
}


export default Navbar;