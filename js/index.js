import { Routes } from './route.js'

const router = new Routes()

router.add('/', '/pages/home.html')
router.add('/universo', '/pages/universo.html')
router.add('/exploracao', '/pages/exploracao.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const home = document.querySelector('nav #home')
home.addEventListener('click', function () {
  const body = document.querySelector('.container')
  body.classList.add('bg1')
  body.classList.remove('bg2', 'bg3')
})

const universo = document.querySelector('nav #universo')
universo.addEventListener('click', function () {
  const body = document.querySelector('.container')
  body.classList.add('bg2')
  body.classList.remove('bg1', 'bg3')
})

const exploracao = document.querySelector('nav #exploracao')
exploracao.addEventListener('click', function () {
  const body = document.querySelector('.container')
  body.classList.add('bg3')
  body.classList.remove('bg2', 'bg1')
})
