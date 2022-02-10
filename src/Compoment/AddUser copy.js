import React, { useState } from "react";

const AddUser = (props) => {
    const [userlist, setUserlist] = useState([])
    const [enteredName, setEnteredName] = useState('')
    const [editing, setEditing] = useState(false)
    const [update, setUpdate] = useState({})

    const NameChangeHander = (e) => {
        setEnteredName(e.target.value)
    }

    const EditChangeHander = (e) => {
        setUpdate({ ...update, name: e.target.value })


    }

    const NewUserSubmitHander = (e) => {
        e.preventDefault()
        // props.AddNewUser(enteredName)

        setUserlist((newUser) => {
            return (
                [...newUser, { name: enteredName, id: Math.random().toString() }]
            )
        })
        setEnteredName('')
        setUpdate('')

        // console.log(enteredName)
    }

    const EditFormSubmitHander = (e) => {
        e.preventDefault()
        upDateDataHander(update.id, update)

    }
    
  const DeleteHander = (id) => {
    const Deletelist = userlist.filter((u) => {
      return (
        u.id !== id
      )
    })
    setUserlist(Deletelist)
    }

    function upDateDataHander(id, update) {
        // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
        // if the id's match, use the second parameter to pass in the updated todo object
        // otherwise just use old todo
        const updatedItem = userlist.map((todo) => {
          return todo.id === id ? update : todo;
        });
        // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
        setEditing(false);
        // update the todos state with the updated todo
        setUserlist(updatedItem);
      }

    console.log("Update Dataa", update)

    const cancelHander = () => {
        setEditing(false)
    }
    const editHander = (u) => {
        // console.log(u)
        setEditing(true)
        // console.log(editing)
        setUpdate({ ...u })
        // console.log(update)

    }
    // console.log("fefedfefef",update)



    return (
        <div>
            {
                editing ? (<form onSubmit={EditFormSubmitHander}>
                    <div>
                        <label>Edit-User-Name</label>
                        <input type="text" value={update.name} onChange={EditChangeHander} /><br />

                    </div>
                    <div>
                        <button type="submit"> UpDate</button>
                        <button onClick={cancelHander}>Cancel</button>


                    </div>
                </form>) : (<form onSubmit={NewUserSubmitHander}>
                    <div>
                        <label>User-Name</label>
                        <input type="text" value={enteredName} onChange={NameChangeHander} /><br />

                    </div>
                    <div>
                        <button type="submit"> Add User</button>

                    </div>
                </form>)
            }
            <div >
                {userlist.map((u, key) => {
                    return (
                        <div key={u.id}>

                            <ul key={u.id}>
                                <li>{u.name}</li>

                            </ul>
                            <button onClick={() => { editHander(u) }}>Edit</button>

                            <button onClick={() => {DeleteHander(u.id) }}>Delete</button>

                        </div>



                    )
                })
                }


            </div>

        </div>

    )

}
export default AddUser;