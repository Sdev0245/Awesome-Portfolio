import React, {useState} from 'react'
import classes from './Header.module.css';
import Media from '../Media/Media'; 
import chess from '../../images/chess.jpg'
import ecom from '../../images/e-com.png';
import blockchain from '../../images/blockchain.jpg'
import sinec from '../../images/net.webp'
import Footer from '../Footer/Footer';
import ismy from '../../images/ismy.jpg'
const Header = ()=>{

    const listContent = {chess:['C++', 'CLang', 'Makefiles', 'Pruning', 'dynamic Prog'],
                         ecom:['Nodejs', 'React', 'Postgres', 'Yarn', 'docker', 'AWS'],
                         blockchain: ['Nodejs', 'Typescript', 'hyperledger', 'Parity', 'Kubernetes', 'Ansible'],
                         sinec: ['TCP/IP', 'SNMP', 'Docker', 'Kubernetes', 'Kafka', 'MQTT']
                        }
    const lang = ['C', 'C++', 'Java', 'Postgres', 'AWS', 'Docker', 'Cloud']
    return (<>   
                <div className={classes.main_container}>
                    <div className={classes.container}>
             
                        <div className={classes.main_header}>
                            <h1>
                                fullstack developer portfolio
                            </h1>
                            <h3>
                                From Backend to Frontend, Nosql to Sql, Live 
                                Video Streaming to Audio Streaming, I have been working on various technologies
                                day in day out,
                            </h3>
                       
                        </div>
                        <div className={classes.media}>
                            <Media  name="Chess Engine" content={listContent.chess} img={chess} />
                            <Media name="Ecommerce" content={listContent.ecom} img={ecom} />
                            <Media name="Hyperledger" content={listContent.blockchain} img={blockchain} />
                            <Media name="Network Management" content={listContent.sinec} img={sinec} />
                            <Media name="Show off college" content={listContent.ecom} img={ismy} />
                            <Footer></Footer>

                        </div>

                        
                    </div>
                   
                </div>
            </>)

};


export default Header;
