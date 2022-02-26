const getGoods = () => {
  fetch('/db/db.json')
    .then((res) => res.json())
  
    .then((data) => {
      console.log(data)
    })
}

getGoods()
