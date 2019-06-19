import './index.css'
import src from '../1.png'

const image = document.createElement('img')
image.src = src
console.log(src.size)

document.body.append(image)
console.log(src)