import React from 'react';

import "../Css/GifSearchModal.css";


export const GifSearchModal = ({gifLinks,search,renderGif,handleSearch}) =>{
    return (
      <>
       { gifLinks != 0  && ( 
      
      <div className="modalPop">
         <div className="modalHeading">
            <input type="text" placeholder="Search gif across app.." value={search} onChange={handleSearch} className='searchBar' />
         </div>

               <div className="modalBody">
               {/* <ul>
                        { gifLinks.map(gifLinks =>(
                          <li key= {gifLinks.id}>{gifLinks.name}</li>
                        ))}
                        </ul> */}
                         {/* <div className="gif-item" key={gifLinks.id}>
                          <img src={gifLinks.images.url} style={{color:"red"}} alt="gif" />
                        </div> */}
                       {/* { gifLinks.map(gif =>{
                          console.log("i am here");
                          return (
                      
                            <div className="container gif" key={gif.id}>
                                 <img src={gif.images.fixed_height.url} style={{width:"250px" ,color:"red"}} alt="gif" />
                            </div> 
                          )
                        })
                       }  */}
                       {renderGif()}
               </div>
      </div>
) }
</>
    )
 }