import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const TodoLists = (props) => {
    // const [line,setLine] = useState(false);
    // const cutIt = () => setLine(true);
    return (<>
        <div className='todo_style'>
            <i class="fa fa-times" aria-hidden="true" onClick={()=>{
                props.onSelect(props.id)
            }}/>
            <li>{props.text}</li>

            {/* If we want line-through when click on Delete Icon..
            <span onClick={cutIt}><DeleteIcon className="deleteIcon" /></span>
            <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li> */}
        </div>
    </>);
    
};
export default TodoLists;