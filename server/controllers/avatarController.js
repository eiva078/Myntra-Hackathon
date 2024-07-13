import Avatar from '../models/Avatar.js';

export const getAllAvatars = async (req, res) => {
  try {
    const avatars = await Avatar.find();
    res.json(avatars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
