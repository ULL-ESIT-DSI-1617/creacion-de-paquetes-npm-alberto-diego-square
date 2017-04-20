var square = require("../index.js");
require('should');

describe("Square", function() {
  it("Se crea correctamente la clase Square", function() {
    var figura = new square({ width: 100, height: 100 });

    figura.options.width.should.equal(100);
  })
});
