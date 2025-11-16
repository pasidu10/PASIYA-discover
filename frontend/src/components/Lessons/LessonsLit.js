import React, {useEffect, useState} from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';

export default function LessonsList(){
  const [lessons, setLessons] = useState([]);

  useEffect(()=>{
    api.get('/lessons').then(res=> setLessons(res.data.data)).catch(console.error);
  },[]);

  return (
    <div>
      <h2>Lessons</h2>
      {lessons.map(l => (
        <div key={l._id} className="card">
          <h3><Link to={`/lessons/${l._id}`}>{l.title}</Link></h3>
          <p>{l.description}</p>
        </div>
      ))}
    </div>
  );
  }
