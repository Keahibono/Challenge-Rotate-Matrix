/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *  
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;
}


var newMatrixArray =[];
var arr =[];
var x;
//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  // do work here
  var MTX = this.matrix;
  var len = MTX.length;

  for (var i = 0; i < len; i++){
  	for (var j = 0; j < len; j++){
  		var shifted = MTX[j].shift()
  		arr.push(shifted)
  	}
  	arr.reverse();
  	newMatrixArray.push(arr);
    
  }
  //newMatrixArray.splice(len, 5);
  //this.matrix = newMatrixArray;
  //console.log(newMatrixArray);
  // must be a valid Direction, see Direction.js
}