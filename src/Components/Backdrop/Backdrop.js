import classes from './Backdrop.module.css';
import {Link, NavLink} from 'react-router-dom';
const Backdrop = (props)=>{

  
    return (

        <>
            <div  style={{display: props.state ? 'block': 'none'}} onClick={props.toggleBackdrop} className={classes.close}>
               <h2>
                   X
               </h2>
            </div>
            <div style={{display: props.state ? 'grid': 'none'}} className={classes.backdrop}>

               <div className={classes.nav_items}>
                 <h2>
                  <NavLink onClick={props.toggleBackdrop} activeClassName={classes.active} className={classes.link}  to="/" exact="true">  Home </NavLink>
                 </h2>
                </div> 
                <div className={classes.nav_items}>
                 <h2>
                 <NavLink onClick={props.toggleBackdrop} activeClassName={classes.active}   className={classes.link}  to="/blogs">  Blogs </NavLink>
                 </h2>
                </div> 
                <div    className={classes.nav_items}>
                 <h2>
                 <NavLink  onClick={props.toggleBackdrop} activeClassName={classes.active} className={classes.link} to="/contact">   Contact Me </NavLink>  
                 </h2>
                </div> 


            </div>
        </>
    )

 
    
}

export default Backdrop