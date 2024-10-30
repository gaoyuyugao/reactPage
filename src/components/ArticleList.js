// src/components/ArticleList.js
import React from 'react';

function ArticleList() {
  const articles = [
    { title: 'Article 1', date: '2024-09-18', summary: 'Summary of article 1...' },
    { title: 'Article 2', date: '2024-09-15', summary: 'Summary of article 2...' },
    // 更多文章可以放在这里
  ];

  return (
    <section style={styles.articles} id="articles">
      <h2 style={styles.heading}>Latest Articles</h2>
      <div style={styles.articleList}>
        {articles.map((article, index) => (
          <div key={index} style={styles.articleCard}>
            <h3>{article.title}</h3>
            <p><em>{article.date}</em></p>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  articles: {
    padding: '20px',
    marginTop: '40px',
    textAlign: 'center',
  },
  heading: {
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
  }
};

export default ArticleList;
