/**
 * @param {string} prefix
 * @constructor
 */
function Product(prefix) {
    /**
     * @private
     * @type {string}
     */
    this.prefix_ = prefix;
    /**
     * @private
     * @type {string}
     */
     this.type_ = "";
}

/**
 * @param {string} newType
 */
Product.prototype.setType = function(newType) {
    this.type_ = newType;
};

/**
 * @return {string}
 */
Product.prototype.type = function() {
    return this.prefix_ + ": " + this.type_;
};

var product = new Product("fruit");
product.setType("apple");
console.log(product.type());