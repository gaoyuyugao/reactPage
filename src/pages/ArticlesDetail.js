import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function ArticleDetail() {
  const { id } = useParams(); // 获取文章的 ID
  const [content, setContent] = useState(''); // 保存 Markdown 内容

  useEffect(() => {
    // 根据文章 ID 加载对应的 Markdown 文件
    import(`../articles/article${id}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setContent(text))
          .catch((error) => console.error('Error loading markdown file:', error));
      })
      .catch((error) => console.error('Markdown file not found:', error));
  }, [id]);

  if (!content) return <p>Loading...</p>;

  return (
    <div style={styles.articleDetail}>
      <ReactMarkdown>{content}</ReactMarkdown> {/* 渲染 Markdown 内容 */}
    </div>
  );
}

const styles = {
  articleDetail: {
    padding: '20px',
    color: '#000',
    backgroundColor: '#fff',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
};

export default ArticleDetail;