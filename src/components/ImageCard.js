import React from 'react'

function ImageCard({image}) {

    const tags = image.tags.split(',')

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 ">
        <img src={image.webformatURL}  className="h-100 w-full  " />
        <div className="px-6 py-4">
         <div className="font-bold text-purple-500 text-xl mb-2">
           Photo by {image.user}
         </div>
         <ul>
           <li>
             <strong>View: </strong>
             {image.views}
           </li>
           <li>
             <strong>Download: </strong>
             {image.downloads}
           </li>
           <li>
             <strong>Likes: </strong>
             {image.likes}
           </li>
         </ul>
        </div>
        <div className="px-6 py-4">
         {tags.map((tag, index) => (
              <span key={index}className="inline-block bg-gray-200 rounded-full px-3 py-1 m-1 text-sm font-semibold text-gray-700 me-2">
              #{tag}
            </span>
         ))}
        </div>
      </div>
    )
}

export default ImageCard
