import React, {useEffect, useState} from 'react';
import api from '../../api';
import { useParams } from 'react-router-dom';
import Quiz from './Quiz';

export default function LessonPlayer(){
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(()=>{
    api.get(`/lessons/${id}`).then(res=> setLesson(res.data.data)).catch(console.error);
  },[id]);

  if (!lesson) return <div>Loading...</div>;

  return (
    <div>
      <h2>{lesson.title}</h2>
      {lesson.videoUrl && <video controls src={lesson.videoUrl} style={{maxWidth:'100%'}} />}
      <p>{lesson.description}</p>
      {lesson.quiz && lesson.quiz.length > 0 && <Quiz quiz={lesson.quiz} lessonId={id} />}
    </div>
  );
}
