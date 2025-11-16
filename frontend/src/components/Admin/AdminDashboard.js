import React, {useState} from 'react';
import api from '../../api';

export default function AdminDashboard(){
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [videoUrl,setVideoUrl] = useState('');

  const create = async (e) => {
    e.preventDefault();
    try{
      const res = await api.post('/lessons', { title, description: desc, videoUrl });
      alert('Lesson created');
    }catch(err){ alert(err.response?.data?.msg || 'Error'); }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={create} className="form">
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} />
        <input placeholder="Video URL" value={videoUrl} onChange={e=>setVideoUrl(e.target.value)} />
        <button type="submit">Create Lesson</button>
      </form>
    </div>
  );
}
