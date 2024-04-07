import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../modules/tasksModules';


const Input: React.FC = () => {
    const dispatch = useDispatch()

    const [ inputTitle, setInputTitle ] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        dispatch(addTodo(inputTitle))
        setInputTitle('')
        if(inputTitle === '') return;
    }

    return (
        <div>
            <div>
                <div>
                    <input
                        id="title"
                        type="text"
                        className=""
                        value={inputTitle}
                        onChange={handleInputChange}
                        placeholder="TODOを入力してください"
                        required
                    />
                    <button onClick={handleSubmit} className="addBtn" style={{ backgroundColor : inputTitle ? "#008CFF" : "#C1C1C1"}}>追加</button>
                </div>
            </div>
        </div>
    )
}

export default Input