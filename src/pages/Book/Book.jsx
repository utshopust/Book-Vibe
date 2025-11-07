import React, { use } from "react";

const Book = ({ singleBook }) => {
  //   const data = use(bookPromise);
  //   console.log(data);

  console.log(singleBook);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="p-3">
        <img
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
          {singleBook.review}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
