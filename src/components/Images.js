import React from "react"

function Image({className,img}) {
    const [hover,setHover] = React.useState(false)
    return (
        <div className={`${className} image-container`}
         onMouseEnter={()=> setHover(true)}
         onMouseLeave={()=> setHover(false)}
        >
            <img src={img.url} className="image-grid"/>
        </div>
    )
}
export default Image;