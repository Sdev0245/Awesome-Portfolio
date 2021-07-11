import classes from "./Contact.module.css";
import email from '../../images/email.png'
const Contact = ()=>{

    return (<>
                <div className={classes.container}>
                    <div className={classes.header}>
                        <h1>
                           Let's Connect together. 
                        </h1>
                        <p>
                            Please, provide your email and subscribe to my news letter,
                            <div>we can also exchange messages via mail.
                            </div>
                            Please enter your mail
                        </p>
                    </div>

                    <div className={classes.form}>
                        <form>
                            <input  className = {classes.input} type="text" />
                            {/* <input value="message" className = {classes.input} type="text" /> */}
                            <button className={classes.btn}>
                                Subscribe
                            </button>
 
                        </form>

                    </div>
                    <div className={classes.footer}>
                        <h2>
                            Let's Connect via Social Networking!
                        </h2>
                    </div>
                    <div className={classes.social}>
                     <button className={[classes.btn, classes.insta].join(' ')}>
                         Instagram
                     </button>
                     <button className={[classes.btn, classes.linkedin].join(' ')}>
                         Linkedin
                     </button>
                    </div>
                    
                </div>
            </>)

}

export default Contact;