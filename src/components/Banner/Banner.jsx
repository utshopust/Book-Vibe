import React from "react";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="bg-base-200 min-h-[70vh] flex items-center justify-center my-2">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src={bookImage}
          alt="Books collection"
          className="max-w-sm rounded-2xl shadow-xl"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">
            Discover Your Next Great Read
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Explore a wide range of books that inspire, educate, and entertain.
            Whether you’re into fiction, science, or self-development, we’ve got
            something for every curious mind.
          </p>
          <button className="btn bg-green-500 hover:bg-green-600 text-white px-8 text-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
