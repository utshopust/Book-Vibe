import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({data}) => {
  // const [allBooks, setAllBooks] = useState([]);
  // ---------------------------one way--------------------------
  // useEffect(()=>{
  //     fetch('booksData.json')
  //     .then(res=> res.json())
  //     .then(data=>{
  //         setAllBooks(data)
  //     })
  // },[])

  // -------------------------another Way------------------------

//   const bookPromise = fetch("./booksData.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-3xl text-center p-6">Hello Ami booksssss</h1>
      <Suspense fallback={<span>Loading....</span>}>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto justify-items-center">
         {
            data.map(singleBook=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
        }
       </div>
      </Suspense>


      {/* {allBooks.map((book) => (
        <Book key={book.id} book={book}></Book>
      ))} */}
    </div>
  );
};

export default Books;
