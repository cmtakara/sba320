import './style.css';
import { useState } from 'react';

// add mouseOver and mouseOut to add the animation class if the hover isn't working well

export default function GeneralView() {
  const [subject, setSubject] = useState('');

  const handleSubjectClick = (e) => {
    console.log(e.target.id);
    if (e.target.id === 'none') {
      console.log('none');
      setSubject('');
    } 
    else if (e.target.id) {
      console.log(e.target.id);
      setSubject(e.target.id);
    }
  }

  return (
    <div>
      <h1>Class Syllabus</h1>
      <p>click to see the modules in a subject</p>
      <div style={{ display: 'flex' }} onClick={handleSubjectClick}>
        <div className="square one" id='general'>General</div>
        <div className="square one" id="math">Math</div>
        <div className="square one" id="science">Science</div>
        <div className="square one" id="social-studies">Social Studies</div>
        <div className="square one" id='english'>English</div>
        {subject
          ?
          <div className="square one" id='none'>hide them all</div>
          :
          <div className="square one" id='all'>list them all</div>
        }
      </div>
      <h2>{subject ? <>{subject}</> : <></>}</h2>

    </div>
  )
}
