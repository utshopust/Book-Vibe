import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// import { Link } from "react-router";



const Book = ({ singleBook }) => {
  //   const data = use(bookPromise);
  //   console.log(data);

  const { tags, yearOfPublishing, bookId } = singleBook;

  console.log(singleBook);
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow border p-6 ">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto ">
          <img className="h-[166px]" src={singleBook.image} alt="Book" />
        </figure>
        <div className="card-body">
          <div className="flex gap-10 justify-center">
            {tags.map((tag,index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {singleBook.bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book By : {singleBook.author}</p>

          <div className="border border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{singleBook.category}</div>
            <div className="badge badge-outline">
              {singleBook.rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
