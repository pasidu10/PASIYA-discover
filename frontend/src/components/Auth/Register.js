import React, {useState} from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register',{ name, email, password });
      localStorage.setItem('token', res.data.token);
      alert('Registered');
      navigate('/lessons');
    } catch (err) { alert(err.response?.data?.msg || 'Register failed'); }
  };

  return (
    <form onSubmit={submit} className="form">
      <h3>Register</h3>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}
