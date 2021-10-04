import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => {
    const axios = require('axios');
    console.log(data);
    axios.post('/articles', JSON.stringify(data), {headers: {"Content-Type": "application/json"}}).then(function(response){
      setResult("Submission success!");
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("title")} placeholder="Title" />
      <p><input {...register("authors")} placeholder="Authors" /></p>
      <p><input {...register("source")} placeholder="Source" /></p> 
      <p><input {...register("pubyear")} placeholder="Publication Year" /></p>
      <p><input {...register("doi")} placeholder="DOI" /></p>
     
      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;
