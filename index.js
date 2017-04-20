"use strict";
var shape = require('ull-shape-alberto-diego');

/**
 * Clase Square que hereda de la clase Shape.
 */
class Square extends shape {
  /**
   * Constructor de la clase Square, en la que se guarda el objeto de dimensiones
   * @param {Object} input objeto de dimensiones
   */
  constructor(options){
    super(options);
    this.width = this.options.width;
  }
  /**
   * Funcion getArea, calcula el área de la figura
   * @returns {number} devuelve el cálculo del área de la figura
   */
  getArea() {
    return Math.pow(this.width, 2);
  }
}

module.exports = Square;
shape.shapes.Square = Square;
