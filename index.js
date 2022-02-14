const form = document.querySelector(".form");
const input = document.querySelector(".inputtodo");
const btn = document.querySelector("button");
const todo = document.querySelector(".todo");
const todolist = document.querySelector(".todolist");
form.addEventListener("submit", function (e) {
    e.preventDefault();
});

btn.addEventListener("click", function () {
    btn.setAttribute("disabled", true);
    input.oninput = function () {
        if (input.value.length < 1) {
            btn.setAttribute("disabled", true);
        } else {
            btn.removeAttribute("disabled");
        }
    }

    const user = input.value;
    input.value = "";
    const div = document.createElement("div");
    div.append(user);
    div.classList = "todo-item";
    div.style.background = "rgb(167, 158, 158)";
    div.style.alignItems = "center";
    div.style.borderRadius = "2px";
    div.style.padding = "7px";
    div.style.marginBottom = "7px";

    const todolist = document.querySelector(".todolist");
    todolist.prepend(div);
    div.addEventListener('click', e => {
        div.remove(e.target);
    });

    todo.addEventListener("click", () => {
        div.remove();
    })
});