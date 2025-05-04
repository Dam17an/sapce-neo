import React from 'react';
import './ArticleSection.css';
import hawkImage from './hawk-launch.png';
import neoImage from './space-neo.png';
import jupiterImage from './jupiter.png';

const articles = [
    {
        date: 'May 8, 2021',
        title: 'New Hawk Set to Launch in early May',
        image: hawkImage,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        date: 'May 11, 2021',
        title: 'See how Space:Neo is changing satellite launches',
        image: neoImage,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        date: 'May 22, 2021',
        title: 'Jupiter Mission is moving ahead of schedule',
        image: jupiterImage,
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    }
];

export default function ArticlesSection() {
    return (
        <div className="articles-section">
            <div className="articles-container">
                {articles.map((article, index) => (
                    <div className="article-card" key={index}>
                        <div className="image-container">
                            <img src={article.image} alt={article.title} className="article-image" />
                            <div className="article-date">{article.date}</div>
                        </div>
                        <div className="article-content">
                            <h3 className="article-title">{article.title}</h3>
                            <p className="article-text">{article.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="articles-button">SEE ALL NEWS UPDATES</button>
        </div>
    );
}