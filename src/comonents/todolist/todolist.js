import React from 'react';
import './todolist.css'

const todoList = (props) => {
    let dateFormat = (inputFormat) => {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
    }


    let tempTableRow = (e, i) => {
    return ( 
    <React.Fragment key={e.id}>
    <tr>
        <td>{e.title}</td>
        <td>{e.desc}</td>
        <td>{dateFormat(e.startDate) }</td>
        <td>{dateFormat(e.endDate)}</td>
        <td><button onClick={()=>props.deleteToDo(e.id)} className="btn btn-danger">Delete</button></td>
        <td className="checkbox-inline"><input name="isCompleted" type="checkbox" onChange={(event)=>props.updateIscheckedState(event, i)} checked={e.isCompleted}/></td>
        </tr>
        </React.Fragment>
        )}

    let rowData = props.todoList.map((e, i)=>{
        console.log("***aaaa****", e.isCompleted, e.id);

        if(e.isCompleted && props.currentView === 'completed'){
            return tempTableRow(e, i)
        } else if(!e.isCompleted && props.currentView === 'pending'){
            return tempTableRow(e, i)
        } else if ( props.currentView === 'all') {
            return tempTableRow(e, i)
        } else {
            return false;
        }
        
            // return (
            //     <tr key={e.id}>
            //         <td>{e.title}</td>
            //         <td>{e.desc}</td>
            //         <td>{dateFormat(e.startDate) }</td>
            //         <td>{dateFormat(e.endDate)}</td>
            //         <td><button onClick={()=>props.deleteToDo(e.id)} className="btn btn-danger">Delete</button></td>
            //         <td className="checkbox-inline"><input name="isCompleted" type="checkbox" onChange={(event)=>props.updateIscheckedState(event, i)} value={props.currentTodoObject.isCompleted}/></td>
            //     </tr>
            // )
        
        
        
    })
    return (
        <div>
            <div className="dropdown">
            <select value={props.currentView} 
        onChange={(e)=>props.setCurrentView(e)} >
  <option value="all">All</option>          
  <option value="completed">completed</option>
  <option value="pending">pending</option>
</select>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <td>Action</td>
                    <td>Is Completed</td>
                </tr>
                </thead>
                <tbody>
                {rowData}
                </tbody>


            </table>
        </div>
    )
}

export default todoList;