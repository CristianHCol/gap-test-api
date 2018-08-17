
function Store(id, address, name) {
  this.id = id || null;
  this.address = address || null;
  this.name = name || null;
}

Store.prototype.getId = function () {
  return this.id;
};

Store.prototype.setId = function (id) {
  this.id = id;
};

Store.prototype.getAddress = function () {
  return this.address;
};

Store.prototype.setAddress = function (address) {
  this.address = address;
};

Store.prototype.getName = function () {
  return this.name;
};

Store.prototype.settName = function (name) {
  this.name = name;
};

module.exports = Store;

