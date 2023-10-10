import React, { useState, useEffect } from 'react';
import '../App.css';

function Gallery() {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      .then(response => response.json())
      .then(data => {
        setImages(prevImages => [...prevImages, ...data]);
      });
  }, [page]);

  if (images.length == 0) {
    return <div>loading...</div>
  }


  return (
    <div className="container-fluid p-0">


      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={images[1].download_url} alt="logo" style={{ height: "20px", width: "30px", marginright: "10px" }} />
        <h1 style={{ margin: "5px", padding: "3px" }}>View Desktop Images</h1>
      </div>

      <div  >
        <img srcSet={images[9].download_url} alt="headImage" className="w-100" style={{ marginBottom:"20px"}} />
      </div>


      <div className='masonry-grid'>
        {images.map((img) => (
          <div key={img.id} className='grid-item'>
            <img src={img.download_url} alt={img.author} className="rounded mx-auto d-block" />
          </div>
        ))}
      </div>
      <button style={{ margin: "3px", border: "4px" }} class="btn btn-primary btn-lg" onClick={() => setPage(prevImages => prevImages + 1)}>Load More</button>
    </div>

  );
}
export default Gallery;