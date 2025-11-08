import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleBook }) => {
  //   const data = use(bookPromise);
  //   console.log(data);

  console.log(singleBook);
  return (
    <div className="card bg-base-100 w-96 shadow-sm border p-6">
      <figure className="p-4 bg-gray-100 w-2/3 mx-auto ">
        <img
        className="h-[166px]"
          src={singleBook.image}
          alt="Book"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {singleBook.bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {singleBook.author}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{singleBook.category}</div>
          <div className="badge badge-outline">{singleBook.rating} <FaStarHalfAlt /></div>
        </div>
      </div>
    </div>
  );
};

export default Book;
