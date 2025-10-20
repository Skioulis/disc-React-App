import React from 'react';
import './Footer.css';
import '../../assets/styles/utilities.css'
import {faCopyright, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {HoverBeatIcon} from "../FontAwesomeAnimations/HoverBeatIcon.jsx";


export default function Footer() {
    return (
    <>
        <footer className="footer box-container">
            <div className="footer-content styled-box">
                <div className="footer-left">
                    <span>Created by Fotis Fotiadis <span className="copyright-symbol"><FontAwesomeIcon icon={faCopyright} shake/></span>{new Date().getFullYear()}</span>
                </div>
                <div className="footer-right">
                    <span>
                        <a href="mailto:fotis.fotiadis.85@gmail.com" className="email-link" title="Email">
                            <HoverBeatIcon icon={faEnvelope} className="email-link" title="Email" />
                         </a>
                    </span>
                    <span>
                        <a href="https://www.linkedin.com/in/fotis-fotiadis/" className="linkedIn-link"
                           title="LinkedIn" target="_blank">
                           <HoverBeatIcon icon={faLinkedin} className="linkedIn-link" title="LinkedIn" />

                        </a>
                    </span>
                    <span>
                        <a href="https://github.com/Skioulis" className="github-link"
                           title="GitHub" target="_blank">
                            <HoverBeatIcon icon={faGithub} className="github-link" title="GitHub" />
                         </a>
                    </span>
                </div>
            </div>

        </footer>
    </>
    );
}


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//
// export default function FooterIcons() {
//     return (
//         <div>
//             <a href="mailto:you@example.com" title="Email">
//                 <FontAwesomeIcon icon={faEnvelope} size="lg" />
//             </a>
//             <a href="https://www.linkedin.com/in/your-profile" title="LinkedIn" target="_blank" rel="noreferrer">
//                 <FontAwesomeIcon icon={faLinkedin} size="lg" />
//             </a>
//             <a href="https://github.com/youruser" title="GitHub" target="_blank" rel="noreferrer">
//                 <FontAwesomeIcon icon={faGithub} size="lg" />
//             </a>
//         </div>
//     );
// }