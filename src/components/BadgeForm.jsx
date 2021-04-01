import React from "react";

export const BadgeForm = () => {
 const handleChange = (e) =>{
      console.log({value: e.target.value});
  }
 
  
    return (
    <div >
      <h1>New Attendant</h1>

      <form>
        <div className="form-group">
          <label>FirstName</label>
          <input onChange={handleChange} type="text" name="firstName" id="" className="form-control" />
        </div>
        <button className="btn btn-primary" onChange>Save</button>
      </form>
    </div>
  );
};

export default BadgeForm;
