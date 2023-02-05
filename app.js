const board = document.querySelector('#board')
const colors = ['#bf1baf', '#9316e0', '#790dbd', '#3821cf', '#1a3cb8','#f0112b', '#11f050', '#3df011', '#d2f011']
const SQUARES_NUMBER = 900

for (let i = 0; i<SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',setColor)
    square.addEventListener('mouseleave',removeColor)

    board.append(square)
}
function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
 function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
 }