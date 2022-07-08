import { renderHomePage } from "./projectPageView";

const renderNavBar = () => {
  const navBarEl = document.querySelector("nav");
  const left = navBarEl.querySelector(".left");
  const right = navBarEl.querySelector(".right");

  left.innerHTML = `
    <div>Todo App</div>
  `;

  right.innerHTML = `
    <button id="home-btn"><i class="fa-solid fa-house-chimney"></i></div>
  `;

  right.querySelector("#home-btn").addEventListener("click", () => {
    renderHomePage();
  });
};

export { renderNavBar };
