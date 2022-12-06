import React from "react";
import { useProductContext } from "../context/productContext";

const About = () => {
  const { name } = useProductContext();
  return <div className="mb-24">{name}</div>;
};

export default About;
