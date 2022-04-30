import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
function Contact(){
 return(
     <div className="contact">
        <p className="contactInfo">Email: Jasonzhang19970611@gmail</p>
        <p className="contactInfo">Phone: 949-338-5672</p>
         <ul className="socialMedia">
            <li className="fb"><FacebookIcon /></li>
            <li className="github"><GitHubIcon /></li>
            <li className="linkin"><LinkedInIcon /></li>
            <li>Resume<FileDownloadIcon /></li>
        </ul>
     </div>
     
 )
}

export default Contact;