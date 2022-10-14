import "./Card.css";
function Card({ id, userName, wallpaper, userInfo, profilePic }) {
  return (
    <div className='wrapper'>
      <div
        style={{ backgroundColor: wallpaper }}
        className='section_one'
      >
        <img
          src={profilePic}
          alt=''
        />
        <p>{userName}</p>
      </div>
      <div className='section_two'>
        <p className='text'>{userInfo}</p>
      </div>
    </div>
  );
}

export default Card;
