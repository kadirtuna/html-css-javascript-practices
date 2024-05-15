import Header from '../Header';
import SectionMain from '../SectionMain';
import Footer from '../Footer';
import { useState, useEffect } from "react";

function ToDoApp(){
    const [inputContent, setInputContent] = useState("");
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        console.log("ToDoList: ", toDoList);
    
    }, [toDoList]);

    return (
        <section className="todoapp">
            <Header 
                inputContent={inputContent} 
                setInputContent={setInputContent} 
                toDoList={toDoList} 
                setTodoList={setToDoList}
                />
            <SectionMain 
                inputContent={inputContent}
                toDoList={toDoList}
                setToDoList={setToDoList} 
                />
            <Footer/>
        </section>
    )
}

export default ToDoApp;