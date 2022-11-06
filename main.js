window.addEventListener('load', () => {
    const form  = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener("submit", (e)=> {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please, add task");
            return;
        }

        const task_element = document.createElement("div");
        task_element.classList.add("task");
        const task_content_element = document.createElement("div");
        task_content_element.classList.add("content");

        task_element.appendChild(task_content_element);

        const task_input_element = document.createElement("input");
        task_input_element.classList.add("text");
        task_input_element.type = "text";
        task_input_element.value = task;
        task_input_element.setAttribute("readonly", "readonly");

        task_content_element.appendChild(task_input_element);

        list_el.appendChild(task_element);
    })
})