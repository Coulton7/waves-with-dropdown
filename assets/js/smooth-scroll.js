document.addEventListener("DOMContentLoaded", function() {
  let anchorLinks = document.querySelectorAll('a[href^="#"')

  for (let item of anchorLinks) {
    item.addEventListener('click', (e) => {
      let hashVal = item.getAttribute('href')
      let target = document.querySelector(hashVal)
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      history.pushState(null, null, hashVal)
      e.preventDefault();
    })
  }
});