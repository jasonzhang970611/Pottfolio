import React from "react";

function Project(props){
    function handleClick(){
        window.open(props.link,"_blank")
    }

    return(
        <div className="project">
            <h2>{props.name}</h2>
            <img className="projectImg" src={props.img} alt="project_img"/>
            <p>{props.about}</p>
            <button onClick={handleClick}>Github</button>
        </div>
    );
}

export default Project;