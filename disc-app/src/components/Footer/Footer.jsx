// <footer class="container mt-5 mb-3">
//     <div class="row">
//         <div class="col-md-9">
//             <p class="text-muted">Created with <span class="text-danger">❤</span> Για να διαβάσουμε τις ερώτησεις του ΑΣΕΠ 1Γ/2025 by Fotis Fotiadis (skioulis)</p>
//         </div>
//         <div class="col-md-3 text-md-end">
//             <a href="mailto:fotis.fotiadis.85@gmail.com" class="text-muted me-3" title="Email">
//                 <i class="fas fa-envelope fa-lg"></i>
//             </a>
//             <a href="https://www.linkedin.com/in/fotis-fotiadis/" class="text-muted me-3" title="LinkedIn" target="_blank">
//                 <i class="fab fa-linkedin fa-lg"></i>
//             </a>
//             <a href="https://github.com/Skioulis" class="text-muted" title="GitHub" target="_blank">
//                 <i class="fab fa-github fa-lg"></i>
//             </a>
//         </div>
//     </div>
// </footer>

import React from 'react';
import './Footer.css';
import '../../assets/styles/utilities.css'
import {faCopyright, faEnvelope} from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
    <>
        <footer className="footer box-container">
            <div className="footer-content styled-box">
                <div className="footer-left">
                    <span>Created by Fotis Fotiadis <span className="copyright-symbol"><FontAwesomeIcon icon={faCopyright} /></span>{new Date().getFullYear()}</span>
                </div>
                <div className="footer-right">
                    <span>
                        <a href="mailto:fotis.fotiadis.85@gmail.com" className="email-link" title="Email">
                            <FontAwesomeIcon icon={faEnvelope} size={"2rem"}/>
                         </a>
                    </span>
                    <span>
                        <a href="https://www.linkedin.com/in/fotis-fotiadis/" className="linkedIn-link"
                           title="LinkedIn" target="_blank">
                           <FontAwesomeIcon icon={faLinkedin} size={"2rem"}/>
                        </a>
                    </span>
                    <span>
                        <a href="https://github.com/Skioulis" className="github-link" title="GitHub" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size={"2rem"}/>
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