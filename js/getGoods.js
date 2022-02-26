const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')
  // console.log(links);
  const getData = () => {
    fetch('/db/db.json')
      .then((res) => res.json())

      .then((data) => {
        console.log(data)
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      // console.log('Click')
      e.preventDefault()
      getData();
    })
  })
  //===метод записи
  // localStorage.setItem('goods', {name: 'all'})
  // localStorage.setItem('goods', JSON.stringify({name: 'all'}))
  
  localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4]))
  //===метод чтения
  // console.log(localStorage.getItem('goods'));
  // console.log(JSON.parse(localStorage.getItem('goods')));
  const goods = JSON.parse(localStorage.getItem('goods'))
 
    //console.log(goods);
   console.log(localStorage)
  //=== метод удаления
  localStorage.removeItem('goods');
  console.log(localStorage);
}

getGoods()
