export const getUserProfile = async (req, res) => {
  try {
    const username = req.params.username;
    if (!username) return res.status(400).json({ error: "Username is required" });

    const userData = await fetch(`https://api.github.com/users/${username}`,{
      headers:{
        authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    });
    const userProfile = await userData.json();
    if (userData.error) throw new Error(data.error);
    if (!userData) return res.status(200).json([]);

    const repoResponse = await fetch(userProfile?.repos_url,{
      headers:{
        authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    });
    const repos = await repoResponse.json();
    res.status(200).json({ userProfile, repos });

  } catch (error) {
    console.log("Error in user controller", error.message);
    res.status(501).json({ error: "Internal server error" });
  }
};
