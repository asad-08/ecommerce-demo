import React, { useEffect, useState } from "react";

const ImageShow = ({ images, getSelectedImage }) => {
  const [clickedImage, setClickedImage] = useState(
    images && images.length > 0 ? images[0] : ""
  );
  useEffect(() => {
    getSelectedImage(clickedImage);
  }, [clickedImage, setClickedImage]);
  const handleImage = (e, item) => {
    setClickedImage(item);
  };
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-start justify-between flex-col gap-2">
        {images &&
          images.map((item) => (
            <img
              key={Math.random}
              src={item}
              alt={Math.random}
              className="h-24 max-w-[160px] w-[160px] border hover:cursor-pointer p-2"
              onClick={(e) => handleImage(e, item)}
            />
          ))}
      </div>
      <div>
        <img
          src={clickedImage}
          alt={Math.random}
          className=" border h-96 p-2"
        />
      </div>
    </div>
  );
};

export default ImageShow;
