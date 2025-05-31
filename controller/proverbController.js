import proverbs from "../data/proverbs.js";

export const getAllProverbs = (req, res) => {
  res.json(proverbs);
};

export const gerRandomProverb = (req, res) => {
  const random = proverbs[Math.floor(Math.random() * proverbs.length)];
  res.json(random);
};
