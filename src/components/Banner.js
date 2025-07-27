import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/coder.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";
export const Banner=()=>{
    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting, setIsDeleting]= useState(false);
    const toRotate= ["Aspiring Software Engineer", "Final Year CSIT Student "];
    const [text, setText]= useState('');
    const [delta, setDelta ] =useState(300-Math.random()*100);
    const period=2000;

    useEffect(()=>{
        let ticker= setInterval(()=>{
            tick();
        }, delta)

        return ()=> {clearInterval(ticker)};
    }, [text])

    const tick =()=>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting&&updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate_animated animate_fadeIn":" "}>
                    <span className="tagline">Welcome</span>
                    <h1>{'Shreeti Bajracharya'}<br></br><span className="wrap">{text}</span></h1>
                    <p style={{ textAlign: "justify" }}>I’m Shreeti Bajracharya, a final-year CSIT student passionate about building clean, user-focused web apps. Currently working at CloudFactory, I’m gaining hands-on experience in data operations while sharpening my skills in development and testing.</p>
                    <button onClick={()=>console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
        
    
}