import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
function Contact(){
    let FBlink="https://www.facebook.com/jason.zhang.735";
    let LIlink="https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true";
    let GHlink="https://github.com/jasonzhang970611/Covid-19";
    let Resumelink="https://docs.google.com/document/d/1xicxD40dPqoYoVYm8ALJEWqgbKp6NMI_/edit?usp=sharing&ouid=111326175867922239725&rtpof=true&sd=true"
    function handleClick(){
       
    }
 return(
     <div className="contact">
        <p className="contactInfo">Email: Jasonzhang19970611@gmail <a class="btn" href="mailto:jasonzhang19970611@gmail.com">CONTACT ME</a></p>
        <p className="contactInfo">Phone: 949-338-5672</p>
         <ul className="socialMedia">
            <li className="fb" onClick={handleClick => {window.open(FBlink,"_blank")}}><FacebookIcon /></li>
            <li className="github" onClick={handleClick => {window.open(LIlink,"_blank")}}><GitHubIcon /></li>
            <li className="linkin" onClick={handleClick => {window.open(GHlink,"_blank")}}><LinkedInIcon /></li>
            <li className="resume" onClick={handleClick => {window.open(Resumelink,"_blank")}}>Resume<FileDownloadIcon /></li>
        </ul>
     </div>
     
 )
}

export default Contact;