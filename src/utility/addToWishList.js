const getSWishList = () => {
  const storeBookSTR = localStorage.getItem("WishList");

  if (storeBookSTR) {
    const storeBookData = JSON.parse(storeBookSTR);
    return storeBookData;
  }
  else{
    return [];
  }
};

const addToWishList = (id) => {
    const storeBookData = getSWishList();

    if(storeBookData.includes(id)){
        alert('Sorry This Book Is Already Exist To Your WishList')
    }
    else{
        storeBookData.push(id)
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("WishList",data)

        console.log(storeBookData);
    }
};

export {addToWishList,getSWishList}
