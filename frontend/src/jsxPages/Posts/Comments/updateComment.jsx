import React from "react";
import { useState } from 'react'
import '../../../App.css'
import handleUpdate from "../../../service/handleUpdate.js";
import handleChange from "../../handleChangeInput.js";
const UpdateComment = ({ body,title, setData, id }) => {
    const [newForm,setNewForm] = useState({title:title ,body:body});
    return (
        <>
            <input  name={'title'} value={newForm.title} onChange={handleChange(setNewForm)}/>
            <button onClick={()=>handleUpdate(setData,newForm,`comments/${id}`,'title',id)}>update title</button>
            <br />
            <textarea  name={'body'} value={newForm.body} onChange={handleChange(setNewForm)}/>
            <button onClick={()=>handleUpdate(setData,newForm,`comments/${id}`,'body',id)}>update body</button>
            
        </>
    )
}
export default UpdateComment;