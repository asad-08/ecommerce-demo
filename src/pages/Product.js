import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageShow from "../components/product/ImageShow";
import PageBreadcrumb from "../components/product/PageBreadcrumb";
import { useProductContext } from "../context/productContext";
import StarRatings from "react-star-ratings";
import AddToCart from "../components/product/AddToCart";

const API = "https://dummyjson.com/products";

const Product = () => {
  const { id } = useParams();
  const { getProduct, isSingleProductLoading, product } = useProductContext();
  const [clickedImage, setClickedImage] = useState("");
  const serviceItems = [
    { item: "Super Fast Delivery", icon: "uil uil-parcel" },
    { item: "Free Shipping", icon: "uil uil-truck" },
    { item: "Money Back Guaranteed", icon: "uil uil-money-withdrawal" },
    { item: "Secure Payment", icon: "uil uil-master-card" },
  ];
  useEffect(() => {
    getProduct(`${API}/${id}`);
  }, [id]);

  if (isSingleProductLoading) {
    return <div>....Loading</div>;
  }
  const getSelectedImage = (img) => {
    setClickedImage(img);
  };
  return (
    <div className="mt-6 mb-32 px-5">
      <PageBreadcrumb title={product.title} />
      <div className="max-w-[1200px] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-5">
        <ImageShow
          images={product.images}
          getSelectedImage={getSelectedImage}
        />
        <div className="flex gap-3 flex-col items-start justify-center p-2 text-sm">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>
            <StarRatings
              rating={product.rating}
              starRatedColor="teal"
              starDimension="25px"
              starSpacing="5px"
            />
          </p>
          <p className="line-through">
            <span className="font-semibold">Regular Price: </span>
            {product.price + 200}
          </p>
          <p className=" text-teal-700">
            <span className="font-semibold">Today's Deal: </span>
            {product.price}
          </p>
          <p>{product.description}</p>
          <div className="flex flex-col gap-4 md:flex-row items-start md:items-center justify-between">
            {serviceItems.map((item) => (
              <div
                key={Math.random}
                className="flex items-start justify-center flex-col"
              >
                <i
                  className={`${item.icon}  text-teal-800 text-base flex items-start justify-start`}
                ></i>
                <label className="font-semibold text-left text-xs">
                  {item.item}
                </label>
              </div>
            ))}
          </div>
          <hr className="w-full" />
          <p>
            <span className="font-semibold">Available: </span>
            {product.stock > 0 ? "In Stock" : "TBA"}
          </p>
          <p>
            <span className="font-semibold">ID: </span>{" "}
            {Math.ceil(Math.random() * (1000 - 1) + 1)}
          </p>
          <p>
            <span className="font-semibold">Brand: </span> {product.brand}
          </p>
          <hr className="w-full" />
          <AddToCart
            id={product.id}
            price={product.price}
            product={product}
            clickedImage={clickedImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
