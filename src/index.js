import "./style.scss";
import portfolio from "../assets/portfolio-thumbnail.png";
import sillySketch from "../assets/silly-sketch-thumbnail.png";
import ticTacToe from "../assets/tic-tac-toe-thumbnail.png";

// Languages

const stack1 = document.getElementById("stack1");
const stack2 = document.getElementById("stack2");
const stack3 = document.getElementById("stack3");

const viewPortHeight = document.documentElement.clientHeight;

document.addEventListener("scroll", onScroll);

const stacks = [stack1, stack2, stack3];

// Projects

let projects = document.querySelectorAll(".project");

projects = [...projects];

projects = projects.filter((project) => project.nodeType === 1);

function onScroll() {
	stacks.forEach((language) => {
		if (language.getBoundingClientRect().top < viewPortHeight) {
			language.style.animation = "hero 800ms ease-in-out forwards";
		}
	});

	projects.forEach((project) => {
		if (project.getBoundingClientRect().top < viewPortHeight) {
			project.style.animation = "hero 800ms ease-in-out forwards";
		}
	});
}
