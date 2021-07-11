import classes from './Footer.module.css';
const Footer = (props)=>{

    return(
        <>
           
            <div className={classes.footer}>
                <h1>
                    Let's Talk
                </h1>
                <p>
                    If you want to get in touch with me,
                    contact me 
                    <div>
                     sdeven515@gmail.com,
                    </div>
                    <div>
                        or subscribe  <a className={classes.hover} href="#">here</a> for news letter
                    </div>
                </p>

            </div>     
          

        </>
    )

}
export default Footer