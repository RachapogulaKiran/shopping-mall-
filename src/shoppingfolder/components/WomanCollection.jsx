import React from 'react'

const WomanCollection = (props) => {
   const { tittle, image1, image2, image3, image4, image5, image6 } = props.ladiesFashion;

  return (
          <div className="collectionSection">
            <h2>{tittle}</h2>

      <div className="menImages">
       <img src={image1} alt={tittle} ></img>
         <img src={image2}alt={tittle}></img>
           <img src={image3} alt={tittle}></img>
             <img src={image4} alt={tittle}></img>
               <img src={image5} alt={tittle}></img>
                 <img src={image6} alt={tittle}></img>
      </div>
      </div>
    
  )
}

export default WomanCollection
