import { useState } from 'react';

export default function SignIn() {
    const [form, setForm] = useState({
        uname: "",
        pword: "",
    })
    const [user, setUser] = useState(null);

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
        setUser(`username: ${form.uname}`);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <p>Sign up to see the calendar of lessons.</p>
            <div style={{ margin: "20px", border: "black solid 3px", padding: "30px", display: "flex", justifyContent: "space-around" }}>
                <form onSubmit={handleSubmit}>
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
                    <input type="submit" value="Log In" />
                </form>
            </div>

            <p>If you click the "Log In" button, nothing will happen yet.</p>
            <p>Your inputs will show up below.</p>
            <div id="user-inputs">
                {user ? <p>{user}</p> : <p></p>}
            </div>
        </div>
    )

}
