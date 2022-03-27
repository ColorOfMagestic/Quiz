const swiper = new Swiper(".slider_1", {
	spaceBetween: 5,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
// question

const questions = document.querySelectorAll("[data-num]");
const btnsPrew = document.querySelectorAll(".btn-prew");
const btnsNext = document.querySelectorAll(".btn-next");
const lastBtn = document.querySelector(".choice-block_btn");
const forms = document.querySelectorAll("form");

// const firstForm = forms[0];
// const firstFormInputs = forms[0].querySelectorAll("input");

// console.log(forms);

let count = 1;

btnsPrew.forEach((btn) => {
	btn.addEventListener("click", () => {
		count--;
		questions.forEach((i) => {
			i.classList.remove("question--active");
			let num = +i.dataset.num;
			if (count === num) {
				i.classList.add("question--active");
				// console.log(i);
			}
		});
	});
});
btnsNext.forEach((btn) => {
	btn.addEventListener("click", () => {
		count++;
		questions.forEach((i) => {
			i.classList.remove("question--active");
			let num = +i.dataset.num;
			if (count === num) {
				i.classList.add("question--active");
				// console.log(i);
			}
		});
		collInfoFunc();
	});
});

lastBtn.addEventListener("click", collInfoFunc);

function collInfoFunc() {
	let collInfo = [];

	forms.forEach((form) => {
		const formInputs = form.querySelectorAll("input");
		formInputs.forEach((input) => {
			if (input.checked) {
				collInfo.push(input.value);
			}
		});
	});
	const collInfoStr = collInfo.join();
	console.log(collInfoStr);
}
