import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import Todolist from '../components/TodoList';
import queryString from "query-string";

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {id : 1, title : "eat", status: "new"},
        {id : 2, title : "code", status: "completed"},
        {id : 3, title : "sleep", status: "new"},
    ];
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initTodoList)
    const [filteredStatus, setFilteredStatus] = useState (() =>{
        const params = queryString.parse(location.search);
        console.log(params);
        return params.status || "all";
    });
    
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || "all");
    
    }, [location.search]);
        
    const handleTodoClick = (todo, index) =>{
        // clone new array 
        // console.log(todo,index);
        
        const newTodoList = [...todoList];
        newTodoList[index] = {...newTodoList[index],
                        status:newTodoList[index].status==="new" ? "completed" : "new",
                        };

        setTodoList(newTodoList);

    }
    const handleShowAllClick = () =>{
        // setFilteredStatus("all");
        const queryParams = {status: 'all'};
        history.push({
            pathname:match.path,
            search : queryString.stringify(queryParams),
        });
    }
    
    const handleShowCompletedClick = () =>{
        const queryParams = {status: 'completed'};
        history.push({
            pathname:match.path,
            search : queryString.stringify(queryParams),
        });
    }
    const handleShowNewClick = () =>{
        const queryParams = {status: 'new'};
        history.push({
            pathname:match.path,
            search : queryString.stringify(queryParams),
        });
    }
    const renderedTodoList = todoList.filter(todo => filteredStatus ==='all' || filteredStatus === todo.status)

    return (
       <div>
            <h3>todo list</h3>
            <Todolist todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick} >show all</button>
                <button onClick={handleShowCompletedClick} >show completed</button>
                <button onClick={handleShowNewClick} >show new</button>
            </div>
       
       </div>

    );
}

export default TodoFeature;