import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {alert(JSON.stringify(data))};

  return (
    <div className="app">
    <form className="forma" onSubmit={handleSubmit(onSubmit)}>
      <label className="Register">Register</label>
      <input className="name" name="Name"{...register("firstName", { required: true, maxLength: 20 })} />
      <input className="surname" {...register("Surname", { required: true, maxLength: 20 })} />
      <br/>
      <select className="select" {...register("Role")}>
        <option value="Student">Student</option>
        <option value="Company Owner">Company Owner</option>
        <option value="Sales Manager">Sales Manager</option>
      </select>
      <br/>
      <label className="gender">Gender</label>
      <div  className="male"><input {...register("gender",{required:true})}  type="radio" name="gender" value="Male"/><label>Male</label></div>
      <div className="female"><input {...register("gjinia",{required:true})} type="radio" name="gender" value="Female"/><label>Female</label></div>
      <br/>
      <input className="reason" type="text" name="reson for applying" />
      <input className="submit" type="submit" />
      <label className="already"> Already registered?<a href="">Log in</a></label>
    </form>
    </div>
  );
}

export default App;
