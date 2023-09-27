import { useState } from "react";

function Collapse ({title, description}){
const[open, setOpen] = useState(false);
const toggle = () => {
    setOpen(!open);
  };

    return(
        <div className="collapse">
            <div className="collapse-title" onClick={toggle}>
                <h2>{title}</h2>
                <i className="collapse-icon"></i>
                {open && <div className="collapse-description">
                <p>{description}</p>
            </div>}
            </div>
        </div>
    );
} 

export default Collapse;