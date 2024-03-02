import User from "../model/user.model.js";

export const getUserProfile = async (req, res) => {
  try {
    const username = req.params.username;
    if (!username) return res.status(400).json({ error: "Username is required" });

    const userData = await fetch(`https://api.github.com/users/${username}`,
    
    {
      headers: {
        authorization: `token${process.env.GITHUB_TOKEN}`,
      },
    })
    
    const userProfile = await userData.json();
    if (userData.error) throw new Error(data.error);
    if (!userData) return res.status(200).json([]);

    const repoResponse = await fetch(userProfile?.repos_url,
      {
        headers: {
          authorization: `token${process.env.GITHUB_TOKEN}`,
        },
      } 
      )
    
    const repos = await repoResponse.json();
    res.status(200).json({ userProfile, repos });

  } catch (error) {
    console.log("Error in user controller", error.message);
    res.status(501).json({ error: "Internal server error" });
  }
};

export const LikeProfile = async (req, res) => {
  try {
    const {username} = req.params;
    
    if (!username) return res.status(400).json({ error: "Username is required" });

    const user = await User.findById(req.user._id.toString())
    

    const userToLike = await User.findOne({username})
    if(!userToLike) return res.status(404).json({error:"User is not registered in our website"})

    if(user.likedProfile.includes(userToLike.username)){
      return res.status(400).json({error:"You already liked this profile"})
    }

    userToLike.likedBy.push({username:user.username,avatarUrl:user.avatarUrl,likedDate:Date.now()})
    user.likedProfile.push(userToLike.username)

   await  Promise.all(userToLike.save(),user.save())

   res.status(200).json({message:"User is liked"});

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getLikes = async (req, res) => {
  
  try {
    const user = await User.findById(req.user._id.toString())
    if(!user) return res.status(404).json({error:"User not found"})

    res.status(200).json({likedBy:user.likedBy})

  } catch (error) {
    res.status(500).json({ error: error.message })
    console.log("Error in getLikes controller",error.message)
  }

}