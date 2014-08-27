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
// another way of defining getters and setters
Object.defineProperty(Product.prototype, "type", {
    /**
     * @return {string}
     * */
     get: function() {
         return this.prefix_ + ": " + this.type_;
     },
     /**
      * @param {string}
      */
     set: function(newType) {
         this.type_ = newType;
     }
});

var product = new Product("fruit");

product.type = "apple";
console.log(product.type);

console.log(product.type = "orange");
console.log(product.type);