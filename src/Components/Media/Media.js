import classes from './Media.module.css';
import React, {useState} from 'react';
const Media = (props)=>{

    const [styleState, setstyleState] = useState({display: 'none'})
    console.log(props.img)
    function setInline() {
        setstyleState({display: 'inline-block'})
    }

    function setNone() {
        setstyleState({display: 'none'})  
    }
    return ( 
                <div className={classes.media}>
                        <div className={classes.bar}>
                                <i>
                                    
                                </i>
                                <i style={{backgroundColor: "#28ca41"}}>
                                    
                                </i>
                                <i style={{backgroundColor:"#ffbd2e"}}>
                                    
                                </i>
                                <p>{props.name} </p>
                            <div className={classes.terminal}>
                            <div style={{backgroundImage:`url(${props.img})`}}  onMouseEnter={setInline} onMouseLeave={setNone} className={classes.img}>
                                <div   className={classes.backdrop}>
                                
                                    <ul style={styleState} className={classes.tags}>
                                        {
                                            props.content.map((key, val)=>{
                                                return(<li key={val}> {key} </li>)
                                            })
                                        }
                                    </ul>

                                </div>
                            </div>
                        </div>

                     
                        </div>
                       
                    </div>
             )
}

export default Media