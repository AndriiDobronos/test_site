/*
  Переписати ДЗ 1, використовуючи текстове поле та кнопку на сторінці замість prompt:
    "Треба реалізувати просту програму з наступними умовами:
    За допомогою prompt запитати ім'я користувача.
    За допомогою alert вивести "Hello, John! How are you?" , де John це те, що ввів користувач"
*/

/*
  Додаємо на html сторінку:
    <div class="task-3">
      <input type="text"/>
      <button>Ok</button>
    </div>
*/

const numbers = '0123456789'
const okButton = document.querySelector('.task-3 button')
okButton.addEventListener('click', function() {
    const name = document.querySelector('.task-3 input').value.trim()
    const symbolsOfName = name.split('')
    if (name && symbolsOfName.every(symbol => !numbers.includes(symbol))) {
        const capitalizedName = name[0].toUpperCase() + name.substring(1).toLowerCase()
        alert(`Hello, ${capitalizedName}! How are you?`)
    }
    else if (!name) {
        alert('You didn\'t enter a name')
    }
    else {
        alert('Name cannot contain numbers')
    }
})
const btn = document.querySelector('.color button');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
    const secondDivElement = document.querySelectorAll('Div')[1]
    const marker = secondDivElement.querySelector('h1')
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    const rndWidth = random(255)
//    document.button.style.backgroundColor = rndCol;
//    document.body.style.backgroundColor = rndCol;
    secondDivElement.style.borderLeft = `${rndWidth}px solid ${rndCol}`
    marker.style.color = rndCol
//      secondDivElement.style.borderLeft = "22px solid green"
//    alert(`${rndWidth}px `)
}