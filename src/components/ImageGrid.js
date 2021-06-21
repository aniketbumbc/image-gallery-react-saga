import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../css/style.css';

function ImageGrid() {
  const key =
    '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const result = await fetch(
      `https://api.unsplash.com/photos/?client_id=${key}&per_page=28`
    );
    result.json().then((images) => {
      setPhotos(images);
    });
  };

  return (
    <>
      <div className='content'>
        <section className='grid'>
          {photos.map((image) => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error,
});

export default connect(mapStateToProps, null)(ImageGrid);
