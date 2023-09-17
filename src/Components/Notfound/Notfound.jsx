import React from "react";
import error from "../../assets/error.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Notfound() {
  return (
    <div className="container text-center">
      <h1>Not Found</h1>
      <LazyLoadImage src={error} className="w-50 " alt="" />
    </div>
  );
}
