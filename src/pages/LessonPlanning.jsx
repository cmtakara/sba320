import { useEffect, useState } from 'react';

export default function LessonPlanning() {
  const [lessons, setLessons] = useState([]);
  const LOCAL_URL='http://localhost:5050/api/lessons';
  const DEPLOY_URL = 'https://sba1319.onrender.com/api/lessons';

  const getLessons = async () => {
    try {
        const response = await fetch(DEPLOY_URL);
        const data = await response.json();
        console.log(data[0]);
        setLessons(data);
    } catch (err) {
      console.error(err);
    }
  }  

    useEffect(() => {
      getLessons();
    }, [])

  return (
    <>
    <div>LessonPlanning</div>
    {lessons.length 
      ?
      <> 
      {
        lessons.map((lesson) => (
          <>
          <h2>{lesson.subject} {lesson.dateTaught ? <>taught on {lesson.dateTaught}</> : <></>}</h2>
          <h3>{lesson.module} : {lesson.modLesson} </h3>
          </>
        ))

      }
      </>
      :
      <h2>No lessons to display yet</h2>
    }
    </>
  )
}
