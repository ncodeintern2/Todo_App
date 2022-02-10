import React, { useState } from "react";

import AddUser from "./Compoment/AddUser";
import UserList from "./Compoment/UserList";


const App =()=> {
  const [userlist, setUserlist] = useState([])

  const AddUserList = (uname, uage) => {
    setUserlist((newUser) => {
      return (
        [...newUser, { name: uname, age: uage, id: Math.random().toString() }]
      )
    })
    // console.log("Inside Function",userlist)
  }
  // console.log("Outside Function",userlist)

  const DeleteHander = (id) => {
    const Deletelist = userlist.filter((u) => {
      return (
        u.id !== id
      )
    })
    setUserlist(Deletelist)
    }



    return (
      <div>
        <AddUser AddNewUser={AddUserList} />
        <UserList userlist={userlist} deleteHander={DeleteHander} />


      </div>
    )
  }
  export default App;
