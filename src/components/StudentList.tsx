import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Student {
  id: number;
  name: string;
  email: string;
}

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setStudents(res.data))
      .catch((err) => console.error('Error fetching students:', err));
  }, []);

  return (
    <div>
      <h1>Bài 2: Danh sách sinh viên</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/bai2/student/${student.id}`} style={{ fontWeight: 'bold' }}>
              {student.name}
            </Link>
            <span style={{ marginLeft: 8, fontWeight: 'normal', textTransform: 'lowercase' }}>
              {student.email}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
