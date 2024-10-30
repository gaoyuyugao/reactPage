// src/components/ArticleList.js
import React from 'react';

function ArticleList() {
  const articles = [
    { id: '1', title: 'Python学习之路', date: '2024-10-9', summary: '《动手学深度学习》' },
    { id: '2', title: '前端学习之路', date: '2024-10-23', summary: 'React+native' },
    // 更多文章可以放在这里
  ];

  return (
    <section style={styles.articles} id="articles">
      <h2 style={styles.heading}>随笔</h2>
      <div style={styles.articleList}>
        {articles.map((article) => (
          <div key={article.id} style={styles.articleCard}>
            <a
              href={`/articles/${article.id}`}        // 使用 href 代替 to
              target="_blank"                         // 新标签页打开
              rel="noopener noreferrer"               // 安全性措施
              style={styles.link}
            >
              <h3>{article.title}</h3>
              <p><em>{article.date}</em></p>
              <p>{article.summary}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  articles: {
    color: '#fff',
    padding: '20px',
    marginTop: '40px',
    textAlign: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: '1.8em',
    marginBottom: '20px',
  },
  articleList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  articleCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '15px',
    borderRadius: '8px',
    transition: 'transform 0.2s',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
};

export default ArticleList;
