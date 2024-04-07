import React from "react";
import classes from "./CssModules.module.scss";

type Props = {
    onClick:(event: any) =>void
}

export const AddBt: React.FC<Props>= (props) => {

    const addTodo = () => {
        props.onClick();
    }

    const style = {
        "backgroundColor": props.backgroundColor
    };

    return (
        <>
            <input className={classes.addBtn} type="button" value="追加" onClick={addTodo} style={style}/>
        </>
    );
};

export const DeleteBtn: React.FC = (props) => {

    const deleteTodo = () => {
        props.onClick();
    }

    const todo = props;

    return (
        <>
            <button id="dltBtn" className={classes.deleteBtn} onClick={()=>deleteTodo(todo.id)}>削除</button>
        </>
    );
};

export const CompleteBtn: React.FC = (props) => {

    const completeTodo = () => {
        props.onClick();
    }

    const todo = props;



    return (
        <>
            <button id="cmpBtn" className={classes.completeBtn} onClick={()=>completeTodo(todo.id)}>完了</button>
        </>
    );
};