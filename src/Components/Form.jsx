
import { useEffect, useRef, useState } from "react";

export default function Form(){
  const [formState, setFormState] = useState({
    name: "",
    gender: "",
    role: "",
    maritalStatus: false,
    image: null
  });
  const imageRef = useRef(null);

  useEffect(() => {
    console.log(`inside useEffect`, imageRef);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormState({
      ...formState,
      image: file
    });
  };

  const handleFormUpdate = (e) => {
    let { name, value, type, checked } = e.target;
    // compute final value, is it value / checked
    const val = type === "checkbox" ? checked : value;
    setFormState({
      ...formState,
      [name]: val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  console.log(imageRef);

  const {name,gender,role,maritalStatus}=formState

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text"
                    name="name"
                    placeholder="Name"
                    value={formState.name}
                    onChange={handleFormUpdate}
                />
            </div>
            <div>
                <label>Gender: </label>
                <select
                    value={formState.gender}
                    onChange={handleFormUpdate}
                    name="gender"
                >
                    <option value="" key="1">
                        Select a Gender
                    </option>
                    <option value="M" key="male">
                        M
                    </option>
                    <option value="F" key="female">
                        F
                    </option>
                </select>
            </div>
            <div>
                <label>Role: </label>
                <select
                    value={formState.role}
                    onChange={handleFormUpdate}
                    name="role"
                >
                    <option value="" key="1">
                        Select a Role
                    </option>
                    <option value="Student" key="student">
                        Student
                    </option>
                    <option value="Lecturer" key="lecturer">
                        Lecturer
                    </option>
                    <option value="Stop Member" key="stop">
                        Stop Member
                    </option>
                    <option value="Director" key="director">
                        Director
                    </option>
                </select>
            </div>
            <div>
                <label>Marital status: </label>
                <input
                    checked={formState.maritalStatus}
                    onChange={handleFormUpdate}
                    name="maritalStatus"
                    type="checkbox"
                />
            </div>
            <div>
                <label>Profile Picture: </label>
                <input
                    multiple
                    onChange={handleImageChange}
                    ref={imageRef}
                    type="file"
                />
            </div>
            <div>
                <input type="submit" value="SUBMIT"/>
            </div>

            <div style={{marginTop: 40}}>Above Data bellow inside Box</div>
            <div style={{width: "300px", background: "black", color:"white",display: "flex", flexDirection: "column",alignItems: "center"}}>
                <p>{name}</p> 
                <p>{gender}</p> 
                <p>{role}</p> 
                <p>{maritalStatus}</p> 
            </div>
        </form>
    )
}