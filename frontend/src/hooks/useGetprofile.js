const getProfileInfo = async (username = "codersfreedom") => {
  try {
    const res = await fetch(`api/users/profile/${username}`);
    const { userProfile, repos } = await res.json();

    return { userProfile, repos };
  } catch (error) {}
};

export default getProfileInfo;
