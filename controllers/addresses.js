import { User } from "../models/index.js";

const addresses = {
  get: async (req, res) => {
    const { username } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      res.status(200).send(user);
      res.end();
    } else {
      res.status(401);
      res.end();
    }
  },
  post: async (req, res) => {
    const { username, stxAddress, btcAddress } = req.body;
    console.log(req.body);
    const user = await User.findOne({ username });
    console.log(user.stxAddress);
    if (user) {
      if (stxAddress) {
        const newset = new Set([...user.stxAddress, stxAddress]);
        user.stxAddress = Array.from(newset);
      }
      if (btcAddress) {
        const newset = new Set([...user.btcAddress, btcAddress]);
        user.btcAddress = Array.from(newset);
      }
      user.save();
      res.status(200).send(user);
      res.end();
    } else {
      res.status(402);
      res.end();
    }
  },
};

export { addresses };