import React, { useState } from 'react';
import TodoLists from './TodoLists';
const App = () => {
    const [newTask, setNewTask] = useState();
    const [Items, setItems] = useState([]); //An array who will change states so initially passed an empty array
    const inputEvent = (event) => setNewTask(event.target.value);
    const itemListUpdate = () => {
        setItems([...Items,newTask]);
        // setItems((oldItems)=>{
        //     return [...oldItems,newTask];
        // });
        setNewTask("");
    };

    const deleteItems = (id) => {
        setItems((oldItems)=>{
            return oldItems.filter((arrayEle ,index)=>{
                return id!==index;
            });
        });
    };
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br/> <h1>To-do List</h1> <br/>
                    <input type="text" placeholder="Add Item" onChange={inputEvent} value={newTask}/>
                    <button onClick={itemListUpdate}> + </button>

                    <ol>
                        {Items.map((itemval,index)=>{ //onSelect and all others is a custom attribute
                            return <TodoLists key={index} id={index} text={itemval} onSelect={deleteItems}/>;
                        })}
                    </ol>

                </div>
            </div>
        </>
    );
};

export default App;