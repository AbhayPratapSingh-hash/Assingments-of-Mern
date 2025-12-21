//get the input fields
const taskInput = document.getElementById('taskInput');

// get the add button 
const addTaskBtn = document.getElementById('addTaskBtn');

//get the task list 
const taskList = document.getElementById('taskList');


// we need event listener when button clicked 
// making the "Add Task" button respond when clicked

//listen for button clicked when UI button clicked

addTaskBtn.addEventListener('click', () => {  // arrow function, waiting to be clicked
    console.log('Button was clicked!');
    
    // Get the value from input field
    const taskText = taskInput.value.trim(); // we are using trim for removing extra spaces 
    
    //checking if empty show message
    if(taskText == ''){
        alert('Please enter a task !');
        return ; // stop the function here moving forwards 
    }

    // create a new list item 
    const li= document.createElement('li'); // it will create a new <li> element 
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    // now the text appeard in the front and we need styling to look good

    //create a span task text 
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText; // update a task text and storing in taskspan

      // CREATE a div for buttons
    const buttonsDiv = document.createElement('div');

    //create a edit button is clicked , appeared button like a dynamic button (NOT in UI)
    const editBtn = document.createElement('button');
    editBtn.className = "btn btn-warning btn-sm me-2"; // me-2 means add margin b/w edit and delete 
    editBtn.textContent = "Edit";
    // when edit button is clicked active this
    editBtn.addEventListener('click', () => { // arrow function
        const newTask = prompt('Edit your Task', taskSpan.textContent);

        //if user want to edit and not want to edit by pass this feature
        if (newTask !== null && newTask.trim() !== '') {
            taskSpan.textContent = newTask.trim();      // use newTask (fixed)
            updateLocalStorage();
            console.log('Task edited', newTask);
        }
    });

    


    //create a delete button is clicked 
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Delete';
    //when delete button is clicked active this
    deleteBtn.addEventListener('click', () => { // arrow function
        li.remove(); // remove the entire task
        updateLocalStorage();
        console.log('Task Deleted', taskText);
    });

    // append buttons to the div, then add span and div to the li
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);
    
        // ADD span and button to list item
    li.appendChild(taskSpan);
    li.appendChild(buttonsDiv);   // append the whole buttons container


    // add the list item to the task list 
    taskList.appendChild(li); // add the task to the page

    //clear the input field 
    taskInput.value = " "; // clear the input box 
    
    console.log('Task Added :', taskText); 
    saveTaskToLocalStorage(taskText);
});



// now we are working on storing the data into localstorage of web browser if refreshed the data should be persistent

// function to get all tasks from localstorage
const getTaskFromLocalStorage = () => { // arrow function
    let tasks;

    // checking if task is already stored or not into a localstorage
    if(localStorage.getItem('tasks') == null){
        tasks = []; // empty array if nothing saved
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks')); // whatever the value get 
    }
    return tasks;
}

//function to save a task to localstorage 
const saveTaskToLocalStorage = (taskText) => { // arrow function
    // get existing task data 
    let tasks = getTaskFromLocalStorage();

    //add new task to array
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Tasks saved to localStorage', taskText);
}



// -> now are working on load tasks from localstorage , which means when the page get refreshed the stored data should be visible 

const loadTasksFromLocalStorage = () => { // arrow function
    // Get all saved tasks
    let tasks = getTaskFromLocalStorage();
    
    // Loop through each task and create it
    tasks.forEach((taskText) => { // arrow function
        
        // CREATE a new list item
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        // CREATE a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // CREATE a div for buttons
        const buttonsDiv = document.createElement('div');
        
        // CREATE an edit button
        const editBtn = document.createElement('button');
        editBtn.className = 'btn btn-warning btn-sm me-2';
        editBtn.textContent = 'Edit';
        
        editBtn.addEventListener('click', () => { // arrow function
            const newText = prompt('Edit your task:', taskSpan.textContent);
            if (newText !== null && newText.trim() !== '') {
                taskSpan.textContent = newText.trim();
                     updateLocalStorage(); // Update localStorage
                     console.log('Task edited to:', newText);
            }
        });
        
        // CREATE a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Delete';
        
        deleteBtn.addEventListener('click', () => { // arrow function
            li.remove();
            updateLocalStorage();
        });
        
        // ADD buttons to buttons div
        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(deleteBtn);
        
        // ADD span and buttons div to list item
        li.appendChild(taskSpan);
        li.appendChild(buttonsDiv);
        
        // ADD list item to task list
        taskList.appendChild(li);
    });
}

// Load tasks when page loads
loadTasksFromLocalStorage();


// -> update localStorage
const updateLocalStorage = () => { // arrow function
    let tasks = [];

    // get all items items currently on the page
    const taksItems =  taskList.querySelectorAll('li');

    // loop through each task and get its text
    taksItems.forEach((item) => { // arrow function
        const taskText = item.querySelector('span').textContent;
        tasks.push(taskText);
    });

    // save updated task to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('localStorage updated');
}