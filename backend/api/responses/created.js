module.exports = function created(msg) {
  var res = this.res;

  res.status(201);

  return (msg) ? res.send(msg) : res.send();
};
