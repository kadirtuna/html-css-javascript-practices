function SectionMain({inputContent, toDoList, setToDoList}){
    // useEffect(() => {
    //     console.log("3", toDoList);
    // // });
    // }, [toDoList]);

    const handleChange = (event) => {
        let liElement = document.getElementById(event.target.name);

        if(event.target.checked){
            liElement.className = "completed";
        }
        else {
            liElement.className = "";
        }
    };

    const destroyToDoElement = (event) => {
        let index = event.target.name;
        console.log("1", toDoList);
        setToDoList(toDoList.splice(index, 1));
        console.log("2", toDoList);
        // liElement.remove();

    };

    return(
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
            <ul className="todo-list">
            {
                    toDoList.map((toDoItem, index) => {
                        return(
                            <li id={index}>
                                <div className="view">
                                    <input name={index} className="toggle" type="checkbox" onChange={handleChange}/>
                                    <label>{toDoItem.value}</label>
                                    <button name={index} className="destroy" onClick={destroyToDoElement}></button>            
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {/* <ul className="todo-list">
                <li className="completed">
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Learn JavaScript</label>
                        <button className="destroy"></button>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Learn React</label>
                        <button className="destroy"></button>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Have a life!</label>
                        <button className="destroy"></button>
                    </div>
                </li>
            </ul> */}
        </section>
    );
}

export default SectionMain;