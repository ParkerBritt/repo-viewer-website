import './Card.css';

function Card({title, content, url})
{
    return (
        <a href={url} className="card-link"> <div className='card'>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{content}</p>
        </div></a>
    );

}

export default Card;
