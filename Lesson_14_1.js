/*
  реалізувати згортання/розгортання вкладеного списка "Фази обробки подій:" по кліку миші
*/

/*
  Додаємо на html сторінку:
    <ul>
      <li>Питання-відповіді</li>
      <li>Події та обробники</li>
      <li><span>-</span> Фази обробки подій:
        <ul>
          <li>Спливання (Bubbling)</li>
          <li>Захоплення (Capturing)</li>
        </ul>
      </li>
      <li>Об'єкт Event</li>
      <li>Делегування</li>
      <li>Приклади задач з подіями</li>
    </ul>
*/

const thirdLiElement = document.querySelectorAll('li')[2]
thirdLiElement.addEventListener('click', function(event) {
    const marker = thirdLiElement.querySelector('span')
    const elementToToggle = thirdLiElement.querySelector('ul')
    if (!elementToToggle.style.display) {
        elementToToggle.style.display = 'none'
        marker.innerHTML = '+'
    }
    else {
        elementToToggle.style.display = ''
        marker.innerHTML = '-'
    }
})