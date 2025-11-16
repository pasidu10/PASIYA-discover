require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Lesson = require('./models/Lesson');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected');

  // create admin
  const adminEmail = 'admin@pasiya.local';
  const exists = await User.findOne({ email: adminEmail });
  if (!exists) {
    const hashed = await bcrypt.hash('admin123', 10);
    await User.create({ name: 'Admin', email: adminEmail, password: hashed, role: 'admin' });
    console.log('Admin user created ->', adminEmail, '/ admin123');
  }

  // sample lesson
  const sample = await Lesson.create({
    title: 'Basic Algebra - භාජනය සහ සමීකරණ',
    description: 'Algebraic basics in Sinhala',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    quiz: [
      { question: '2 + 2 = ?', options: ['3','4','5'], correctIndex: 1 },
      { question: '5 - 3 = ?', options: ['2','1','3'], correctIndex: 0 }
    ],
    tags: ['math','algebra']
  });

  console.log('Sample lesson created', sample._id);
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
