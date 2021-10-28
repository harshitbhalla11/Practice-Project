import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
    const [addUserName, setUserName] = useState("");
    const [Age, setAge] = useState("");
    const [error,setError]=useState("");
    const addUnserHandler = (event) => {
        event.preventDefault();
    };
    const onClickHandler = (event) => {
        event.preventDefault();
        if (addUserName.length === 0 || Age.trim().length === 0) {
            setError({
                title: 'invalid input',
                message:'please enter a valid name and age(non empty values)'
            })
            return
        }
        if (+Age < 1) {
            setError({
                title: 'invalid Age',
                message:'please enter valid age'
            })
            return
        }
        props.onAddUser(addUserName, Age);
        setUserName("");
        setAge("");
    };

    const useranmeChangeHandler = (event) => {
        const userName = event.target.value;

        setUserName(userName);



    }
    const ageChangeHandler = (event) => {

        const age = event.target.value
        setAge(event.target.value);
    }
    const errorHandler = (event) => {
        setError(null);
    }
    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUnserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" id="username" value={addUserName} onChange={useranmeChangeHandler} />
                    <label htmlFor="age">Age(Years)</label>
                    <input type="text" id="username" value={Age} onChange={ageChangeHandler} />
                    <Button type="submit" onClick={onClickHandler}>Add User</Button>
                </form>
            </Card>
        </>
    );


};
export default AddUser;