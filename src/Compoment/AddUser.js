import React,{useState} from "react";

const AddUser = (props) => {
    const[enteredName,setEnteredName]=useState('')
    const[enteredAge,setEnteredAge] =useState('')
    const NameChangeHander =(e) =>{
            setEnteredName(e.target.value)
    }
    const AgeChangeHander =(e) =>{
        setEnteredAge(e.target.value)
    }
    

    const SubmitHander = (e) =>{
        e.preventDefault()
        props.AddNewUser(enteredName,enteredAge)
        setEnteredName('')
        setEnteredAge('')
        console.log(enteredName,enteredAge)
    }
    return (

        <form onSubmit={SubmitHander}>
            <div>
                <label>User-Name</label>
                <input type="text" value={enteredName} onChange={NameChangeHander}/><br/>
                <label>Age</label>
                <input type="number" value={enteredAge} onChange={AgeChangeHander} />
            </div>
            <div>
                <button type ="submit"> Add User</button>
                
            </div>
        </form>
    )

}
export default AddUser;