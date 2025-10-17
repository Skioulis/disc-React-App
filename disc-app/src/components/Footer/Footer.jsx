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


export default function Footer() {
    return (
    <>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <span>left</span>
                </div>
                <div className="footer-right">
                    <span>right</span>
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