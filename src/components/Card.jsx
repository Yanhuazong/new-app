import '../styles/card.css';

const Card = ({name, title, email, img}) => {

  return (
    <div className="profile-card">
      <div className="profile-card__image">
        <img src={img} alt={name} />
      </div>
      <div className="profile-card__content">
        <p>{name}</p>
        <p>{title}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  );
};

export default Card;
