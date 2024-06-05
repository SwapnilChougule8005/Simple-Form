import React from 'react';
import {useRecoilState} from 'recoil';
import {userDataChange} from './atoms';

const SubmitBtn = ()=> {
    const userData = useRecoilState(userDataChange)
   
    const handleSubmit = () => {
        console.log(userData)
    }
    

    return (
        <div>
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}
export default SubmitBtn;