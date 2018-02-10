/* eslint-disable */
export default {
  error (err) {
    const fls = document.querySelector('.flashes')
    if (err.response) {
      for (let i = 0; i < err.response.data.error.length; i++) {
        fls.style.display = 'inline-block'
        const node = document.createElement('span')
        node.style.display = 'block'
        node.classList.add('flashError')
        const errTxt = document.createTextNode(`${err.response.data.error[i]}`)
        node.appendChild(errTxt)
        fls.appendChild(node)
      }
    } else {
      fls.style.display = 'inline-block'
      const node = document.createElement('span')
      node.style.display = 'block'
      node.classList.add('flashError')
      const errTxt = document.createTextNode(`${err}`)
      node.appendChild(errTxt)
      fls.appendChild(node)
    }
    fls.addEventListener('click', () => {
      fls.style.display = 'none'
      fls.innerHTML = null
    })
    setTimeout(() => {
      fls.style.display = 'none'
      fls.innerHTML = null
    }, 4600)
  },
  success (msgArr) {
    const fls = document.querySelector('.flashes')
    for (let i = 0; i < msgArr.length; i++) {
      fls.style.display = 'inline-block'
      const node = document.createElement('span')
      node.style.display = 'block'
      node.classList.add('flashSuccess')
      const errTxt = document.createTextNode(`${msgArr[i]}`)
      node.appendChild(errTxt)
      document.querySelector('.flashes').appendChild(node)
    }
    fls.addEventListener('click', () => {
      fls.style.display = 'none'
      fls.innerHTML = null
    })
    setTimeout(() => {
      fls.style.display = 'none'
      fls.innerHTML = null
    }, 4600)
  }
}
