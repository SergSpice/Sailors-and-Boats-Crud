module.exports = {
    find: async function(req, res) {
      const reserves = await Reserves.find();
  
      return res.json(reserves);
    },
    create: async function(req, res) {
      const reserves = await Reserves.create(req.allParams()).fetch();
  
      return res.created(reserves);
    },
    update: async function(req, res) {
      const id = req.param('id');
      const reservesTmp = req.allParams();
      const reserves = await Reserves.updateOne(id).set(reservesTmp);
  
      return (reserves) ? res.updated("Updatea3") : res.notFound();
    },
    destroy: async function(req, res) {
      const id = req.param('id');
      const reserves = await Reserves.destroyOne(id);
      
      return (reserves) ? res.deleted("Elimina3") : res.notFound();
    }
  };