import { useState, useEffect } from "react";

function RegistrationForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState("");

  /* INPUT HANDLER */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* FETCH API */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  /* VALIDATION */
  const validate = () => {
    let temp = {};

    if (!formData.name) temp.name = "Name is required";
    if (!formData.email) temp.email = "Email is required";
    if (!formData.password) temp.password = "Password is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  /* SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Registration Successful ✅");

      setFormData({
        name: "",
        email: "",
        password: ""
      });
    }
  };

  return (
    <div className="registration-form">

      <h2>Registration Form</h2>

      {success && <p className="success">{success}</p>}

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}

        <button type="submit">Register</button>
      </form>

      {/* API DATA DISPLAY */}
      <div className="api-data">
        <h3>Registered Users (API)</h3>

        {users.slice(0, 5).map(user => (
          <p key={user.id}>
            {user.name} — {user.email}
          </p>
        ))}
      </div>

    </div>
  );
}

export default RegistrationForm;