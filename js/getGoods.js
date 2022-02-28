const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')
  // console.log(links);
  const getData = (value, category) => {
    fetch('/db/db.json')
      .then((res) => res.json())

      .then((data) => {
        // console.log(data)
        const array = data.filter((item) => item[category] === value)

        localStorage.setItem('goods', JSON.stringify(array))
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      // console.log('Click')
      e.preventDefault()
      const linkValue = link.textContent
      const category = link.dataset.field
      //console.log(category);
      // console.log(linkValue);
      //  console.log(link);
      getData(linkValue, category)
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
  //  console.log(localStorage)
  //=== метод удаления
  localStorage.removeItem('goods')
  // console.log(localStorage);
}

getGoods()
