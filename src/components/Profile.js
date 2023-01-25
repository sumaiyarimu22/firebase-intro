const Profile = ({ user }) => {
  return (
    <div className="profile container mx-auto py-10">
      <h2 className="section-title text-center text-4xl text-gray-500 mb-10">
        Profile
      </h2>

      {user.email && (
        <div className="profile-card flex flex-col gap-3 items-center">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="h-28 w-28 object-cover rounded-full"
          />
          <h3 className="text-5xl">{user.displayName}</h3>
          <p>Email: {user.email}</p>
          <p>ID: {user.uid}</p>
          <button className="google-sign-in bg-gray-700 mt-3 text-white h-14 w-48 rounded-md font-medium hover:bg-orange-500 duration-300">
            Login with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
