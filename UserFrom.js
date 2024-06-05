import React from 'react';
import {useRecoilState} from 'recoil';
import {userDataChange} from './atoms';
import SubmitBtn from './SubmitBtn';

const UserFrom = () => {

     const [userData,setUserData] = useRecoilState(userDataChange);

    const handleChange = (event) => {
        setUserData(prevFormData => {
            event.preventDefault()
          return {...prevFormData,
         [event.target.name] : event.target.value
          }  
         })
    }

    return (
        <div>
            <form>
              <div>
                <input type="text" placeholder="first name" onChange={handleChange} name="firstName" />
             </div>
             <div>
                <input type="text" placeholder="last name" onChange={handleChange} name="lastName"/>
             </div>
             <div>
                <input type="email" placeholder="Enter your email" onChange={handleChange} name="email"  />
             </div>
             <div>
                <input type="number" placeholder="Enter your age" onChange={handleChange} name="age" />
             </div>
             <div>
                <input type="text" placeholder="Enter your gender" onChange={handleChange} name ="gender" />
             </div>
            </form>
            <SubmitBtn/>
        </div>
    )
}
export default UserFrom;