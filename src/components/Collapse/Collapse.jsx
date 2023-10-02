import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


function Collapse ({title, description}){
const[open, setOpen] = useState(false);
const toggle = () => {
    setOpen(!open);
  };

    return(
        <div className="collapse">
            <div className="collapse-title">
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faChevronUp} className={ open ? "collapse-icon collapse-icon-anim-open":"collapse-icon collapse-icon-anim-close"} onClick={toggle}/>
            </div>
            <div className={open ? "collapse-description-show" : "collapse-description-parent"}>
                   <div className="collapse-description"><p>{description}</p></div>
            </div>
        </div>
    );
} 

export default Collapse;