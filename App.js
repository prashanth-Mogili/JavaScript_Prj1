console.log("Hello World");
debugger;
document.write("hello ");
document.addEventListener('DOMContentLoaded',function(){

    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;
    debugger;
    //delete movie
    list.addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);

        }
    });

    //add movie
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit',function(e){
        e.preventDefault();


    //creating elemtnets

    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const movieNmae = document.createElement('span');
    const deleteBtn = document.createElement('span');


    //add text content

    movieNmae.textContent = value;
    deleteBtn.textContent = 'Delete';
    //Add classes

    movieNmae.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to DOM

    li.appendChild(movieNmae);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    })



});

