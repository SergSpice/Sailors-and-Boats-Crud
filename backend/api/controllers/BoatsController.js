module.exports = {
  find: async function (req, res) {
    const boats = await Boats.find();

    return res.json(boats);
  },
  create: async function (req, res) {
    const boats = await Boats.create(req.allParams()).fetch();

    return res.created(boats);
  },
  update: async function (req, res) {
    const id = req.param('id');
    const boatsTmp = req.allParams();
    const boats = await Boats.updateOne(id).set(boatsTmp);

    return (boats) ? res.updated("Updatea3") : res.notFound();
  },
  destroy: async function (req, res) {
    const id = req.param('id');
    const boats = await Boats.destroyOne(id);
    await Reserves.destroy().where({
      bid: id
    });

    return (boats) ? res.deleted("Elimina3") : res.notFound();
  },
  findByColor: async function (req, res) {
    const color = req.param('p_color');
    const boats = await Boats.find({
      color: color
    });

    return res.json(boats);
  }
};
