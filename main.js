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

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");


        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        list_el.appendChild(task_element);
        task_element.appendChild(task_action_el);
        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);

        input.value = "";

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_element.removeAttribute('readonly');
                task_input_element.focus();
                task_edit_el.innerText = "Save";
            }
            else {
                task_input_element.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });
    })
})