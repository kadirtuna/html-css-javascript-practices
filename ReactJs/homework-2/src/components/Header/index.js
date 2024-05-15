function Header({inputContent, setInputContent, toDoList, setTodoList}){
    const handleChange = (event) => {
        setInputContent(event.target.value);
    };

    const handleKeyDown = (event) => {
        if(event.key === "Enter"){
            console.log("Enter key pressed!");
            setTodoList([...toDoList, {value: event.target.value, completed: false}])
            setInputContent("");
            console.log(inputContent);
            console.log("Trial");
        }
    };
    return (
        <header className="header">
            <h1>todos</h1>
            <form className="form">
                <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={handleChange} onKeyDown={handleKeyDown} value={inputContent}/>
            </form>
        </header>
    );
}

export default Header;