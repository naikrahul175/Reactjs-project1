import React from 'react';

import "../Css/GifSearchModal.css";


export const GifSearchModal = ({gifLinks,handleImageClick,handleSearch}) =>{
    return (
      <>
       { gifLinks != 0  && ( 
      <div className="modalPop">
         <div className="modalHeading">
            <input type="text" placeholder="Search gif across app.."  onChange={handleSearch} className='searchBar' />
         </div>

               <div className="modalBody">
                  { gifLinks.map(el =>{
                     return (
                        <div className="container" key={el.id}>
                              <img src={el.images.fixed_height.url} onClick={()=>handleImageClick(el)} style={{width:"250px" ,color:"red"}} alt="gif" />
                        </div>
                     )
                     }
                  )}
                      
               </div>
      </div>
)}
 {/* <p>posted message</p> */}
</>
)}