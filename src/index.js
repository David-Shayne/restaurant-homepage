import "./css/normalize.css";
import "./css/base.css";
import "./css/homepage.css";
import "./css/menu.css";
import loadHomepage from "./homepage";
import loadMenuPage from "./menu";

//Initial element variable declarations
const contentEle = document.getElementById("content");
const homeTabBtnEle = document.getElementById("home-tab-btn");
const menuTabBtnEle = document.getElementById("menu-tab-btn");

//Utility function
const unloadPage = function () {
	contentEle.removeChild(document.querySelector("section"));
};

//Event listeners for tab page load logic and initial load
window.addEventListener("load", loadHomepage(contentEle));

homeTabBtnEle.addEventListener("click", (e) => {
	unloadPage();
	loadHomepage(contentEle);
});

menuTabBtnEle.addEventListener("click", (e) => {
	unloadPage();
	loadMenuPage(contentEle);
});
