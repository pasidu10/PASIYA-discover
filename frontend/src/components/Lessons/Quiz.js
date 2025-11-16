import React, {useState} from 'react';
import api from '../../api';

export default function Quiz({ quiz, lessonId }){
  const [answers,setAnswers] = useState(Array(quiz.length).fill(null));
  const [result,setResult] = useState(null);

  const choose = (qIdx,optIdx)=>{
    const c = [...answers]; c[qIdx]=optIdx; setAnswers(c);
  };

  const submit = async ()=>{
    try{
      const res = await api.post(`/lessons/${lessonId}/quiz/submit`, { answers });
      setResult(res.data);
    }catch(err){ alert(err.response?.data?.msg || 'Error'); }
  };

  return (
    <div>
      <h4>Quiz</h4>
      {quiz.map((q,i)=> (
        <div key={i} className="quiz-q">
          <p>{i+1}. {q.question}</p>
          {q.options.map((opt, idx)=> (
            <label key={idx}>
              <input type="radio" name={`q${i}`} checked={answers[i]===idx} onChange={()=>choose(i,idx)} /> {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={submit}>Submit</button>
      {result && <div>Score: {result.score} / {result.total}</div>}
    </div>
  );
}
