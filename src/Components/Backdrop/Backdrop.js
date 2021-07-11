import classes from './Backdrop.module.css';

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
                    Home
                 </h2>
                </div> 
                <div className={classes.nav_items}>
                 <h2>
                    AboutMe
                 </h2>
                </div> 
                <div className={classes.nav_items}>
                 <h2>
                    Contact Me
                 </h2>
                </div> 


            </div>
        </>
    )

 
    
}

export default Backdrop