import React from 'react';

const todoController = (props) => {
    console.log(props.currentTodoObject);
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" onChange={(e)=>props.updateProps(e)}
                    value={props.currentTodoObject.title}
                    className="form-control" id="title" placeholder="Enter Title" name="title" />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="textarea" className="form-control" 
                    onChange={(e)=>props.updateProps(e)}
                    value={props.currentTodoObject.desc}
                    id="desc" placeholder="Enter description" name="desc" />
                </div>
                <div className="form-group">
                    <label>Start Date:</label>
                    <input type="date" className="form-control" 
                    onChange={(e)=>props.updateProps(e)}
                    value={props.currentTodoObject.startDate}
                    id="startDate" placeholder="Enter Start Date" name="startDate" />
                </div>
                <div className="form-group">
                    <label>End Date:</label>
                    <input type="date" className="form-control"
                    onChange={(e)=>props.updateProps(e)}
                    value={props.currentTodoObject.endDate}
                    id="endDate" placeholder="Enter End Date" name="endDate" />
                </div>
                <button type="button" onClick={props.addToDoList} className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default todoController;