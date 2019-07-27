import React from "react";
import "./cardstyle.css";

// function Card(props) {
//     return <> CARD HERE:
//     <div className="image-card">
//         <img onClick={props.onClick} id={props.id} src={props.src} alt={props.alt}/>
//     </div>
// </>
// };
function Card(image) {
    return <>
    <div className="image-card card">
        <img  onClick = {image.onClick} src={image.src}  id = {image.id} alt = {image.alt}/>
    </div>
</>
};

export default Card;