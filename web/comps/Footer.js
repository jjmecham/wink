import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return ( 
        <footer>
            <div className="social">
            <SocialIcon url="https://linkedin.com/in/joeschmoe" style={{ height: 40, width: 40 }} />
            <SocialIcon url="https://www.facebook.com/jeremyjmecham" style={{ height: 40, width: 40 }} />
            <SocialIcon url="https://twitter.com/jeremymecham" style={{ height: 40, width: 40 }}/>
            <SocialIcon url="https://www.pinterest.com/jeremy0174/" style={{ height: 40, width: 40 }}/>
            <SocialIcon url="https://www.youtube.com/channel/UCLkF2VWJTkYIqOb-fXJtsyQ" style={{ height: 40, width: 40 }}/>
            </div>
            <div style={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
                <p style={{fontSize: "20px"}}><a href="https://gleamgraphics.com" target="_blank">a Gleam Graphics&copy; design</a></p>
                <p>Copyright 2023 Wink Tattoos&copy;</p>
            </div>
        </footer>
     );
}
 
export default Footer;