const getStoredBook = () => {
  const storeBookSTR = localStorage.getItem("readList");

  if (storeBookSTR) {
    const storeBookData = JSON.parse(storeBookSTR);
    return storeBookData;
  }
  else{
    return [];
  }
};

const addToStoredDB = (id) => {
    const storeBookData = getStoredBook();

    if(storeBookData.includes(id)){
        alert('Sorry Already Exist')
    }
    else{
        storeBookData.push(id)
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList",data)

        console.log(storeBookData);
    }
};

export {addToStoredDB}
