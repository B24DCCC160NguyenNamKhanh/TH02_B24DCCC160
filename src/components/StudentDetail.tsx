import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error('Error fetching student:', err));
  }, [id]);

  if (!student) return <p>Đang tải dữ liệu sinh viên...</p>;

  return (
    <div>
      <h2>Chi tiết sinh viên</h2>
      <p><strong>Họ tên:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Số điện thoại:</strong> {student.phone}</p>
      <p><strong>Website:</strong> {student.website}</p>

      <Link to="/bai2">← Quay lại danh sách</Link>
    </div>
  );
};

export default StudentDetail;
