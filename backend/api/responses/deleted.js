module.exports = function deleted(msg) {
    var res = this.res;
  
    res.status(200);
  
    return (msg) ? res.send(msg) : res.send();
  };
  