import React, { useState, useEffect } from 'react'
import GroceryList from './GroceryList'
import './Grocery.css'
import db from '../Configs/firebase';
function Grocery() {

    const [task, setTask] = useState("")
    const [data, setData] = useState([])

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setData(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = task;
        setData([...data, newData])

        setTask('')
    }

    const deleteItem =(a)=>{
        const finalData = data.filter((curEle,index)=>{
            return index !== a;
        })
        setData(finalData)
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Grocery app</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" type="text" className="form-control" value={task} onChange={onChangeHandler} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add Items</button>
                        </div>
                    </form>

                    {data.map((value, index) => {
                        return <GroceryList
                            key={index}
                            id={index}
                            task={value}
                            onSelcet={deleteItem}
                        />
                    })}


                </div>
            </div>
        </div>
    )
}

export default Grocery