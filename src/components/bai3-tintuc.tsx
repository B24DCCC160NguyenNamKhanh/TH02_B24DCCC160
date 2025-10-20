import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  published_at: string;
  url: string;
}

const getSiteName = (url: string): string => {
  try {
    const hostname = new URL(url).hostname.replace('www.', '');
    return hostname.split('.')[0][0].toUpperCase() + hostname.split('.')[0].slice(1);
  } catch {
    return 'Trang gốc';
  }
};


const Bai3_News: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    axios.get('https://api.spaceflightnewsapi.net/v4/articles?limit=10')
      .then(res => {
        setArticles(res.data.results);
      })
      .catch(() => {
        setError("Lỗi khi tải dữ liệu tin tức.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Bài 3: Tin tức </h1>

      {loading && <p>Đang tải dữ liệu...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {articles.map(article => (
        <div key={article.id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <img src={article.image_url} alt={article.title} style={{ width: '40%', maxHeight: 350, objectFit: 'cover' }} />
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Xem bài gốc tại {getSiteName(article.url)} </a>
          <p><strong>Ngày đăng:</strong> {new Date(article.published_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Bai3_News;
