export default (el, binding) => {
  if (!binding.value) {
    return false
  }
  const oDiv = el

  oDiv.onclick = function() {
    window.scrollTo(0, 0)
    const imgSrc = oDiv.firstChild.src,
      imgBox = document.createElement('div'),
      img = document.createElement('img')

    imgBox.className = 'img-show-mask'
    img.className = 'bigImg'
    img.src = imgSrc
    imgBox.appendChild(img)
    document.body.appendChild(imgBox)
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      const imgBoxs = document.querySelector('.img-show-mask')

      imgBoxs.onclick = function() {
        imgBoxs.parentNode.removeChild(imgBoxs)
        document.body.style.overflow = 'auto'
      }
    }, 1)
  }
}
