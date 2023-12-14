// Toggle menu button

function toggleMenu() {
  const menu = document.querySelector('.menu')
  const nav = document.querySelector('.navBar')
  menu.classList.toggle('active')
  nav.classList.toggle('active')
}

//Change the background video when click on the gallery image

function changeVideo(name) {
  const bgVideoList = document.querySelectorAll('.bgVideo')
  const trailers = document.querySelectorAll('.trailer')
  const models = document.querySelectorAll('.model')

  bgVideoList.forEach(video => {
    video.classList.remove ('active')
    if (video.classList.contains(name)) {
      video.classList.add('active')
    }
  })

  models.forEach(model => {
    model.classList.remove ('active')
    if (model.classList.contains(name)) {
      model.classList.add('active')
    }
  })

  trailers.forEach(video => {
    video.classList.remove ('active')
    if (video.classList.contains(name)) {
      video.classList.add('active')
    }
  })
}
