import React from "react";
import classes from './Userlist.module.css'

const UserList = (props) => {

        
        
    

    return (
        <div className={classes.userlist}>
            {props.userlist.map((u, key) => {
                return (
                    <div>

                        <ul key={u.id}>
                            <li>{u.name}{u.age}(Age)</li>

                        </ul>
                        <button onClick={() => {props. deleteHander(u.id)}}>Delete</button>
                    </div>



                )
            })
            }


        </div>
    )


}
export default UserList;