import React, {useContext} from "react"


import Image from '../components/Images';

import {getClass} from '../data'
import {Context } from '../context';

function Photos() {
    const {photos} = useContext(Context);
    const images = photos.map((photo ,i ) =>(
      <Image key={i} img={photo} className={getClass(i)}/>
    ))

    return (
        <main className="photos">
           {images}
        </main>
    )
}

export default Photos