import classes from './NewPost.module.css';
import { useState } from 'react';
function NewPost({ onCancle, onAddPost }) {

    const [enteredBody, setEnteredBody] = useState('')
    const [enterAuthor, setEnteredAuthor] = useState('');


    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authoreChangeHandler(event) {
        setEnteredAuthor(event.target.value);

    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enterAuthor
        };
        onAddPost(postData);
        oncancel();
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={bodyChangeHandler} />
            </p>
            <p>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name' required onChange={authoreChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={onCancle}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}
export default NewPost;