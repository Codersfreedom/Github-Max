export const exploreRepos = async (req, res) => {
  try {
    const {language} = req.params;
    
    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    if(!data) return

    res.status(200).json({repos:data.items});
  } catch (error) {
    console.log("Error in Explore controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
