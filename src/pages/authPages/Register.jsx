import { useState } from 'react';

function Register() {
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        uname: "",
        role: "student",
        pword: "",
        pword2: ""
    })
    const [newUser, setNewUser] = useState(null);

    // handleChange function
    const handleChange = event => {
        // dynamically update the state using the event object
        // this function always looks the same
        // console.log('in handleChange ');
        // console.log(event.target)
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        // prevent page refresh
        event.preventDefault()
        // do what you want with the form data
        console.log(form)
        setNewUser(`Name: ${form.fname} ${form.lname} \n username: ${form.uname} \n role: ${form.role}`);
    }

    return (
        <div>
            <h1>Register</h1>
            <p>Sign up to see the calendar of lessons.</p>
            <div style={{ margin: "20px", border: "black solid 3px", padding: "30px", display: "flex", justifyContent: "space-around" }}>
                <form onSubmit={handleSubmit}>
                    <label>First name:
                    <input 
                        type="text"
                        value={form.fname} 
                        onChange={handleChange}
                        name="fname" 
                        placeholder='First Name'
                        />
                        <br />
                        </label>
                    <label>Last name:
                    <input 
                        type="text"
                        value={form.lname} 
                        onChange={handleChange}
                        name="lname" 
                        placeholder='Last Name'
                        />
                    <br />
                    </label>
                    <label>User name (email address for students):
                    <input 
                        type="text"
                        value={form.uname} 
                        onChange={handleChange}
                        name="uname" 
                        placeholder='User Name or Email address'
                        />
                    <br />
                    </label>
                    <label>Role:
                    <select value={form.role} name="role" onChange={handleChange}>
                        <option value="student">student</option>
                        <option value="teacher">teacher</option>
                        <option value="guest">guest</option>
                    </select>
                    <br />
                    </label>
                    <label>Password:
                    <input 
                        type="password"
                        value={form.pword} 
                        onChange={handleChange}
                        name="pword" 
                        placeholder='Create Password'
                        />
                    <br />
                    </label>
                    <label>Confirm Password:
                    <input 
                        type="password"
                        value={form.pword2} 
                        onChange={handleChange}
                        name="pword2" 
                        placeholder='Confirm Password'
                        />
                    <br />
                    </label>
                    <input type="submit" value="Register" />
                </form>
            </div>

            <p>If you click the "Register" button, nothing will happen yet.</p>
            <p>Your inputs will show up below.</p>
            <div id="user-inputs">
                {newUser ? <p>{newUser}</p> : <p></p>}
            </div>
        </div>
    )
}

export default Register;
