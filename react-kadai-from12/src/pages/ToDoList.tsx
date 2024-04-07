import React from "react";;
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";

const TodoList: React.FC = () => {

    const { tasks } = useSelector((state: RootState) => state.tasks)


    return (
        <div className="">
            {
                tasks.length <= 0 ? '' :
                <ul className="list">
                    {tasks.map(task => (
                        <TodoItem key={task.id} task={task} />
                    ))}
                </ul>
            }
        </div>
    )
}

export default TodoList