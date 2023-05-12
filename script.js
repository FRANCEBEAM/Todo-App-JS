
const form = document.querySelector('#form');
const inputTask = document.querySelector('#input-field');
const btnSubmit = document.querySelector('#btn-submit');
const listTask = document.querySelector('.task-items');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = inputTask.value;

    if (input === '') {

        alert('Input field is required');

    } else {

        // div task parent element
        const taskEl = document.createElement('div');
        taskEl.classList.add('task')
        // circle icon
        const checkEl = document.createElement('i');
        checkEl.classList.add('fa-regular', 'fa-circle');
        taskEl.append(checkEl);

        // div task content element
        const contentEl = document.createElement('div');
        contentEl.classList.add('content');

        taskEl.appendChild(contentEl);

        // input
        const inputEl = document.createElement('input');
        inputEl.classList.add('new-task');
        inputEl.type = 'text';
        inputEl.value = input;
        inputEl.setAttribute("readonly", "readonly")
        contentEl.appendChild(inputEl)

        // div action element
        const actionEl = document.createElement('div');
        actionEl.classList.add('action');
        

        taskEl.appendChild(actionEl);

        // action edit element
        const editEl = document.createElement('i');
        editEl.classList.add('fa-solid', 'fa-pen');
         // action remove element
        const removeEl = document.createElement('i');
        removeEl.classList.add('fa-solid', 'fa-trash');
    
        actionEl.append(editEl, removeEl);


        // display to task-items
        listTask.appendChild(taskEl);

        inputTask.value = '';
        
        // EDIT ACTION
        editEl.addEventListener('click', (e) => {
            const taskEl = e.target.closest('.task');
            const newTask = taskEl.querySelector('.new-task');

            if (editEl.classList.contains('fa-pen')) {
                newTask.toggleAttribute('readonly');
                newTask.focus();
                editEl.classList.toggle('fa-check');
            }
        });

        // REMOVE ACTION
        removeEl.addEventListener('click', () => {
            listTask.removeChild(taskEl);
        });


        // CHECK TASK ACTION
        checkEl.addEventListener('click', (e) => {
            const taskEl = e.target.closest('.task')
            const newTask = taskEl.querySelector('.new-task');
           
            newTask.classList.add('done-task')
            checkEl.classList.remove('fa-regular', 'fa-circle');
            checkEl.classList.add('fa-solid', 'fa-circle-check');

            editEl.classList.remove('fa-pen');
            editEl.classList.remove('fa-check');
            newTask.setAttribute('readonly', 'readonly');
        });
    };
});


