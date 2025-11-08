import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDb";
import { getSWishList } from "../../utility/addToWishList";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [WishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const storedWishListData = getSWishList();
    // console.log(storedBookData,storedWishListData);
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const convertedStoredWishList = storedWishListData.map((id) =>
      parseInt(id)
    );

    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
    const myWishList = data.filter((book) =>
      convertedStoredWishList.includes(book.bookId)
    );
    setWishList(myWishList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "Pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if(type === "Ratings"){
        const sortedByRatings = [...readList].sort(
        (a, b) => a.rating - b.rating
      );
      setReadList(sortedByRatings);
    }
  };
  return (
    <div>
      <details className="dropdown flex justify-center items-center my-4">
        <summary className="btn m-1">Sort By : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Ratings")}>Ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I read : {readList.length}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
            {readList.map((b) => (
              <Book key={b.bookId} singleBook={b} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Total WishList : {WishList.length}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
            {WishList.map((w) => (
              <Book key={w.bookId} singleBook={w} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
