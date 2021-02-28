import { useState } from "react";

export const useForm = (initialValue={})=>{
    const [form,setForm] = useState(initialValue);
    const handleInputChange = ({target})=>{
        const {name,value} = target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const forceUpdate = (value)=>{
        setForm({
            ...form,
            ...value
        })
    }
    return [form, handleInputChange, forceUpdate ];
}