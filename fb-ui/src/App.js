
import './App.css';
import {Post} from "./Components/Post";
import {GifSearchModal} from "./Components/GifSearchModal";
import { useState, useEffect } from 'react';
import { elementAcceptingRef } from '@mui/utils';


function App() {
  const [gifLinks, setGifLinks] = useState([])
  const [search, setSearch] = useState("");

  // useEffect(() => {
      //  let url = "https://jsonplaceholder.typicode.com/users"
 const fetchData = () =>{ 
        fetch( "http://api.giphy.com/v1/gifs/search?q=${term}&api_key=tnAte8frboaXuOzCyt9CSmLwaPCpEiYr&limit=25")
            .then(response => response.json())
            .then(gifLinks => {
                setGifLinks(gifLinks.data);
                console.log(gifLinks);        
                console.log("working");
               
            });
            
          }
  //  }, [])

              //for displaying the Gif on the page
  const renderGif =() =>{
    return gifLinks.map(el =>{
        return (
          <div className="container" key={el.id}>
               <img src={el.images.fixed_height.url} style={{width:"250px" ,color:"red"}} alt="gif" />
          </div>
        )
      }
  );
  }
        //searching for gif
  const handleSearch = (event) => {
    const searchWord = event.target.value;
    // const newSearch = gifLinks.filter((value)=>{
    //  // console.log(value);
    //     return value.title.toLowerCase().includes(searchWord.toLowerCase());
    // });
    // setSearch(searchWord); // for getting the typed word  in searchBox
    //console.log(newSearch);
  }

  return (
    <div className="app">
        <Post fetchData={fetchData} gifLinks={gifLinks}/>
        <GifSearchModal  gifLinks={gifLinks} renderGif={renderGif}  search={search} handleSearch={handleSearch}/>
    </div>
  );
}

export default App;
