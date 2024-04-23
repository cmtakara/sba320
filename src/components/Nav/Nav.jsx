import { Link } from 'react-router-dom';
import './style.css'

function Nav () {
    return (
        <div className='nav'>
            <div style={{marginRight: "auto", display: 'flex'}}>
            <Link to='/'>
                <div>Welcome</div>
            </Link>
            <Link to="/syllabus">
                <div>Syllabus</div>
            </Link>
            <Link to="/class">
                <div>Current Class</div>
            </Link>
            <Link to="/planning">
                <div>Lesson Planning</div>
            </Link>
            </div>
            <div style={{marginLeft: "auto", display: 'flex', padding: '10px', justifyContent: 'space-between'}}>
            <Link to="/signin">
                <div  className="smaller">Sign In</div>
            </Link>
            <Link to="/register">
                <div  className="smaller">Register</div>
            </Link>
            </div>
        </div>
    )
}

export default Nav
