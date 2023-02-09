import React from 'react';
import './Add.css'

const Add = () => {
    return (
        <>
        <div className="Title">
        <h1>What will you cook?</h1>
        </div>
        <form className="add-form">
            <div className="name">
            <label>Recipe name</label>
            <input type="text" name="title"></input>
            </div>
            <div className="Ingrediants">
                <form>
                <label>Ingrediants</label>
                <input type="text" name="ingredient"></input>
                <input type="submit" value="add"></input>
                </form> 
            </div>
            <div className="how-to">
            <label>How to make:</label>
            <input type="textarea" name="steps"></input>
            </div>
            <div className="time">
                <form>
                <label>How long to make?</label>
                <input type="number" name="time"></input>
                <input type="submit"></input>
                </form>
            </div>
        </form>
        <h1>Functions yet to work</h1>
        </>
    );
};

export default Add;