import users from "../utils/data";
import Card from "./Card";

function CardLayout() {
  return (
    <div className='cardlayout'>
      {users.map((user) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            userName={user.username}
            wallpaper={user.wallpaper}
            userInfo={user.userInfo}
            profilePic={user.profilePic}
          />
        );
      })}
    </div>
  );
}

export default CardLayout;
