import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav';
import SignIn from './pages/authPages/SignIn';
import Register from './pages/authPages/Register';
import GeneralView from './pages/GeneralView';
import Welcome from './pages/Welcome';
import LessonPlanning from './pages/LessonPlanning';
import StudentView from './pages/StudentView';
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/syllabus' element={<GeneralView />}/>
        <Route path='/class' element={<StudentView />}/>
        <Route path='/planning' element={<LessonPlanning />}/>
      </Routes>
    </>
  )
}

export default App
