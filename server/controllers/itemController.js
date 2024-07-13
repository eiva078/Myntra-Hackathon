import Item from '../models/Item.js';

export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addMultipleItems = async (req, res) => {
  try {
    const items = await Item.insertMany(req.body);
    res.status(201).json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
