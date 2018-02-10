/* eslint-disable */
export default {
  indicateLoading (el) {
    const btn = document.getElementById(el)
    btn.classList.add('disabled')
    btn.innerHTML = `
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    `
  },
  indicateDone (el, originalLabel) {
    const btn = document.getElementById(el)
    btn.innerHTML = originalLabel
    btn.classList.remove('disabled')
  }
}
