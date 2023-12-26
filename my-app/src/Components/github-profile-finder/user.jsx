
export default function User({user}) {
    // eslint-disable-next-line no-unused-vars
    const {
        avatar_url, followers, following, public_repo, name, login, created_at} = user;

     const createDate = new Date(created_at);

  return (
  <div className="user">
    <div>
        <img src={avatar_url} className="avatar" alt="User" />
    </div>
    <div className="name-container">
      <a href={`https://github.com/${login}`}>
        {name || login}
      </a>
      <p>User joined on{" "} {`${createDate.getDate()} ${createDate.toLocaleString("en-us", {month: "short",})} ${createDate.getFullYear()}`}</p>
    </div>
    <div className="profile-info">
        <div>
            <p>Public Repository</p>
            <p>{public_repo}</p>

        </div>
        <div>
           <p>Followers</p>
           <p>{followers}</p>
        </div>
        <div>
        <p>Following</p>
           <p>{following}</p>
        </div>
    </div>
  </div>
  );
}
