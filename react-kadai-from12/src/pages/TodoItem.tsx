import React from "react";
import { Todo } from './Types';
import { useDispatch } from "react-redux";
import { doneTodo, deleteTodo } from "../modules/tasksModules"

type Props = {
    task: Todo
}

const TodoItem: React.FC<Props> = ({ task }) => {
    const dispatch = useDispatch()

    return (
        <li className={task.done ? 'done' : ''}>
            <div className="task">
                <p className="task_title">{task.title}</p>
            </div>
            <div className="btns">
                <button
                    onClick={() => dispatch(deleteTodo(task))}
                    className="deleteBtn"
                >削除</button>
                <button
                    onClick={() => dispatch(doneTodo(task))}
                    className="compBtn"
                >完了</button>
            </div>
        </li>
    )
}

export default TodoItem