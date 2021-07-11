import React, {useState} from 'react'
import classes from './Header.module.css';
import Media from '../Media/Media'; 
import chess from '../../images/chess.jpg'
import ecom from '../../images/e-com.png';
import blockchain from '../../images/blockchain.jpg'
import sinec from '../../images/net.webp'
import Footer from '../Footer/Footer';
import ismy from '../../images/ismy.jpg'
import live from '../../images/live.jpg'
const Header = ()=>{

    const listContent = {chess:['C++', 'CLang', 'Makefiles', 'Pruning', 'dynamic Prog'],
                         ecom:['Nodejs', 'React', 'Postgres', 'Yarn', 'docker', 'AWS'],
                         blockchain: ['Nodejs', 'Typescript', 'hyperledger', 'Parity', 'Kubernetes', 'Ansible'],
                         sinec: ['TCP/IP', 'SNMP', 'Docker', 'Kubernetes', 'Kafka', 'MQTT'],
                         perceive: ['NGINX', 'Docker', 'RTMP', 'Nodejs', 'Kafka', 'KMS', 'Webrtc',
                                    'HLS']
                        }
    const lang = ['C', 'C++', 'Java', 'Postgres', 'AWS', 'Docker', 'Cloud']
    return (<>   
                <div className={classes.main_container}>

                    <div className={classes.container}>
                        <div className={classes.avtar}>
                            <div className={classes.img}>

                            </div>
                        </div>
                        <div className={classes.main_header}>
                            <h1>
                                Hi I'am Deven Sharma, fullstack developer
                            </h1>
                            <h3>
                               I have been working on Backend development and little bit of frontend development, 
                               worked on (Decentralized) Blockhain to distributed systems , Live Video Streaming using RTSP/RTMP and 
                               HLS Protocol, to Audio Streaming, hands on in various Languages from C++ to Nodejs, Java to Python.
                               Good experience in multithreaded code and Design Patterns. Worked on scalable systems and Timeseries Databases
                               like Timescale and influx.
                            </h3>
                        </div>
                        <div className={classes.media}>
                            <Media  name="Chess Engine" content={listContent.chess} img={chess} />
                            <Media name="Ecommerce Project" content={listContent.ecom} img={ecom} />
                            <Media name="Hyperledger" content={listContent.blockchain} img={blockchain} />
                            <Media name="Network Management System" content={listContent.sinec} img={sinec} />
                            <Media name="Show off college" content={listContent.ecom} img={ismy} />
                            <Media name="Perceive AI" content={listContent.perceive} img={live} />
                            <Footer></Footer>

                        </div>

                        
                    </div>
                   
                </div>
            </>)

};


export default Header;
