import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDb";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  const { bookName, image } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };
  return (
    <div className="flex flex-col justify-center m-5  w-2/3 mx-auto">
      <img className="w-[250px] mx-auto" src={image} alt="Book" />
      <p className="text-xl text-center font-bold">BookName: {bookName}</p>

      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-accent m-2 w-32 mx-auto p-2"
      >
        Mark As Read
      </button>
      <button className="btn btn-info m-2 w-32 mx-auto p-2">
        Add To WishList
      </button>
    </div>
  );
};

export default BookDetails;
