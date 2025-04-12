import "./index.scss";

const root = document.querySelector("#app");

function foo() {
  const p = document.createElement("p");
  root.append(p);
  console.log("Привет, мир!");
}

foo();
