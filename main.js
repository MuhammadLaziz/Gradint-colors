const btn = document.querySelector('.btn')
const body = document.querySelector('body')
const colorName = document.querySelector('.name-color')


btn.addEventListener('click', setColor)

function setColor() {
    let colors = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ]
    
    
    function randomColor() {
        let color = '#'
    
    
        for (let i = 0; i < 6; i++) {
            let randomNum = Math.floor(Math.random() * colors.length)
            color += colors[randomNum]
        }
        return color
    }
    
    
    const color1 = randomColor()
    const color2 = randomColor()
    
    
    
    const randomDeg = Math.floor(Math.random() * 360)
    
    // body.style.background = `linear-gradient(${randomDeg}deg, ${color1}, ${color2});`
    
    body.style.background = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`
    colorName.textContent = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`
    colorName.style.fontSize = '25px'
}


setColor()
