/*
ON CONSOLE
const images = document.getElementsByTagName('*');
let srcList = [];
for (let i = 0; i < images.length; i++) {
    srcList.push(images[i].style.backgroundImage);
}
*/

const pizzaGuy = require('pizza-guy')
const urls = require('./url-list.json')

pizzaGuy
  .deliver(urls)
  .onAddress('./scrapped-images')
  .onSuccess((info) => {
    console.log(`${info.fileName} succeed!`)
  })
  .onError((info) => {
    console.log(`${info.fileName} failed`)
  })
  .start()
