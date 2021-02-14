import React from "react"

function Image({className,img}) {
    const [hover,setHover] = React.useState(false)
    const heartIcon = hover && <i className="ri-heart-line favorite"></i>
    const cartIcon = hover && <i className="ri-add-circle-line cart"></i>
    return (
        <div className={`${className} image-container`}
         onMouseEnter={()=> setHover(true)}
         onMouseLeave={()=> setHover(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon}
        </div>
    )
}
export default Image;