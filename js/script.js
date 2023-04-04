'use strict'

// первоначальная установка индекса слайда для отображения
let slideIndex = 1

// присвоение константам необходимых DOM элементов слайда
const slides = document.querySelectorAll('.projects-slider-element')
const nextButton = document.querySelectorAll('.projects-slider-arrow-right')
const previousButton = document.querySelectorAll('.projects-slider-arrow-left')
const rostovAdmiral = document.querySelector('.projects-list__item1')
const sochi = document.querySelector('.projects-list__item2')
const rostovPatriotic = document.querySelector('.projects-list__item3')
const city = document.querySelectorAll('.projects-info-detail__item1')
const area = document.querySelectorAll('.projects-info-detail__item2')
const dot1 = document.querySelectorAll('.projects-slider-dot1')
const dot2 = document.querySelectorAll('.projects-slider-dot2')
const dot3 = document.querySelectorAll('.projects-slider-dot3')

// присвоение константам необходимых DOM элементов бургер-меню
const burger = document.querySelector('.burger-menu')
const popup = document.querySelector('.popup')

// тело документа
const body = document.body

// клонирование элементов меню
const menu = document.querySelector('.header-menu').cloneNode(1)

// добавление прослушки на кнопку следующий слайд
nextButton.forEach(element => {
	element.addEventListener('click', () => {
		nextSlide()
	})
})

// добавление прослушки на кнопку предыдущий слайд
previousButton.forEach(element => {
	element.addEventListener('click', () => {
		previousSlide()
	})
})

// добавление прослушки на ссылки переключающие слайды
rostovAdmiral.addEventListener('click', () => {
	showSlide((slideIndex = 1))
})

sochi.addEventListener('click', () => {
	showSlide((slideIndex = 2))
})

rostovPatriotic.addEventListener('click', () => {
	showSlide((slideIndex = 3))
})
// ...

// добавление прослушки на точки переключающие слайды
dot1.forEach(element => {
	element.addEventListener('click', () => {
		showSlide((slideIndex = 1))
	})
})

dot2.forEach(element => {
	element.addEventListener('click', () => {
		showSlide((slideIndex = 2))
	})
})

dot3.forEach(element => {
	element.addEventListener('click', () => {
		showSlide((slideIndex = 3))
	})
})
// ...

// прослушка загрузки всех элементов DOM
document.addEventListener('DOMContentLoaded', showSlide(slideIndex))

// переключает на следующий слайд
function nextSlide() {
	showSlide((slideIndex += 1))
}

// переключает на предыдущий слайд
function previousSlide() {
	showSlide((slideIndex -= 1))
}

// показывет заданный слайд
function showSlide(n) {
	// закольцовывание слайдов
	if (n > slides.length) {
		slideIndex = 1
	}

	if (n < 1) {
		slideIndex = slides.length
	}
	// ...

	// сброс классов ссылок и точек слайда до изначальных
	rostovAdmiral.className = 'projects-list__item1'
	sochi.className = 'projects-list__item2'
	rostovPatriotic.className = 'projects-list__item3'
	dot1.forEach(element => {
		element.className = 'projects-slider-dot1'
	})
	dot2.forEach(element => {
		element.className = 'projects-slider-dot2'
	})
	dot3.forEach(element => {
		element.className = 'projects-slider-dot3'
	})
	// ...

	// гасим все слайды
	slides.forEach(element => {
		element.style.display = 'none'
	})

	// отображаем необходимый слайд
	slides[slideIndex - 1].style.display = 'block'

	// в зависимости от отображённого слайда изменяем некоторое содержание
	// а так же стили ссылок и точек
	if (slideIndex === 1) {
		city.forEach(element => {
			element.textContent = 'Rostov-on-Don LCD admiral'
		})

		area.forEach(element => {
			element.textContent = '81 m2'
		})

		rostovAdmiral.className = 'projects-list__item1 active'

		dot1.forEach(element => {
			element.className = 'projects-slider-dot1 active'
		})
	} else if (slideIndex === 2) {
		city.forEach(element => {
			element.textContent = 'Sochi thieves'
		})

		area.forEach(element => {
			element.textContent = '85 m2'
		})

		sochi.className = 'projects-list__item2 active'

		dot2.forEach(element => {
			element.className = 'projects-slider-dot2 active'
		})
	} else {
		city.forEach(element => {
			element.textContent = 'Rostov-on-Don patriotic'
		})

		area.forEach(element => {
			element.textContent = '78 m2'
		})

		rostovPatriotic.className = 'projects-list__item3 active'

		dot3.forEach(element => {
			element.className = 'projects-slider-dot3 active'
		})
	}
	// ...
}
// ...

// прослушка бургер-меню
burger.addEventListener('click', burgerHandler)

// отображает/скрывает popup окно
function burgerHandler() {
	popup.classList.toggle('open') // отображает popup окно
	burger.classList.toggle('active') // изменяет вид бургер-меню на крестик
	body.classList.toggle('fixed') // блокирует прокрутку документа
	renderPopup()
}
// ...

// отрисовывает popup окно
function renderPopup() {
	popup.append(menu)
}

// массив пунктов меню из popup окна
const links = Array.from(menu.children)

// прослушка пунктов меню popup окна
links.forEach(element => {
	element.addEventListener('click', closePopup)
})

// скрывает popup окно
function closePopup() {
	popup.classList.remove('open')
	burger.classList.remove('active')
	body.classList.remove('fixed')
}
