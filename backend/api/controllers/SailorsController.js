module.exports = {
  find: async function (req, res) {
    const sailors = await Sailors.find();

    return res.json(sailors);
  },
  create: async function (req, res) {
    const sailors = await Sailors.create(req.allParams()).fetch(); 

    return res.created(sailors);
  },
  update: async function (req, res) {
    const id = req.param('id');
    const sailorsTmp = req.allParams();
    const sailors = await Sailors.updateOne(id).set(sailorsTmp);

    return (sailors) ? res.updated("Updatea3") : res.notFound();
  },
  destroy: async function (req, res) {
    const id = req.param('id');
    const sailors = await Sailors.destroyOne(id);

    return (sailors) ? res.deleted("Elimina3") : res.notFound();
  },
  getRaitingGraterThan: async function (req, res) {
    const rating = req.param('p_rating');
    const sailors = await Sailors.find().where({
      rating: {
        '>': rating
      }
    });

    return res.json(sailors);
  }
};