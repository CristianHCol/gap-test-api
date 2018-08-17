
function Article(id, description, name, price,
  totalInShell, totalInVault, storeName) {       // Accept name and age in the constructor
  this.id = id || null;
  this.description = description || null;
  this.name = name || null;
  this.price = price || null;
  this.total_in_shell = totalInShell || null;
  this.total_in_vault = totalInVault || null;
  this.store_name = storeName || null;
}

Article.prototype.getId = function () {
  return this.id;
};

Article.prototype.setId = function (id) {
  this.id = id;
};

Article.prototype.getDescription = function () {
  return this.description;
};

Article.prototype.setDescription = function (description) {
  this.description = description;
};

Article.prototype.getName = function () {
  return this.name;
};

Article.prototype.settName = function (name) {
  this.name = name;
};

Article.prototype.getPrice = function () {
  return this.price;
};

Article.prototype.settPrice = function (price) {
  this.price = price;
};

Article.prototype.getTotal_in_shell = function () {
  return this.total_in_shell;
};

Article.prototype.setTotal_in_shell = function (totalInShell) {
  this.total_in_shell = totalInShell;
};

Article.prototype.getTotal_in_vault = function () {
  return this.total_in_vault;
};

Article.prototype.setgetTotal_in_vault = function (totalInVault) {
  this.total_in_vault = totalInVault;
};

Article.prototype.getStore_name = function () {
  return this.total_in_vault;
};

Article.prototype.setStore_name = function (storeName) {
  this.store_name = storeName;
};


module.exports = Article;

