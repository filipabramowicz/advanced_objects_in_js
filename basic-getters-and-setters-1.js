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
Product.prototype = {
    /**
     * @return {string}
     */
    get type() {
        return this.prefix_ + ": " + this.type_;
    },
    /**
     * @param {string}
     */
    set type(newType) {
        this.type_ = newType;
    }
};

/**
 * @return {string}
 */
Product.prototype.type = function() {
    return this.prefix_ + ": " + this.type_;
};

var product = new Product("fruit");

product.type = "apple";
console.log(product.type);

console.log(product.type = "orange");
console.log(product.type);

