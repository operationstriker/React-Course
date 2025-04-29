function Todo({ task }) { // function Todo({ task }) delete whats in the curly brackets, its called destructuring
    // taking props object and specifically grabbing the task property
    // console.log(task)

    function deleteHandler() {
        console.log("Delete", task[3]) // instead of running console log in the callback
        
    }

    return (
        <div className="todo-item">
            <h2>{ task }</h2> 
            {/* the curly brackets inside a html element is output any javascript value inside of our HTML */}
            <button onClick={() => deleteHandler()}>Delete</button>
            {/*  <button onClick={() => { handleClick();}}>Delete</button> */}
        </div>
    )
    
}

export default Todo