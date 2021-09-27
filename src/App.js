import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect (() => {
  fetch(`https://pixabay.com/api/?key=23585030-cbd9d874703043984c9330ad3&q=yellow+flowers&image_type=photo&pretty=true`)
   .then(res => res.json())
   .then(data => {
     setImages(data.hits);
     setIsLoading(false);
   })
   .catch(err => console.log(err));
  },[]);


  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
        <ImageCard key={image.id} image={image}/> 
        ))}
      </div>
    </div>
    );
}

export default App;
