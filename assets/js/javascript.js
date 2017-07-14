var productos = [];
var records = document.getElementById('records');

function Producto(compra) {
  this.compra = compra.toLowerCase();
  this.producttID = (productos.length + 1);
};

Producto.prototype.toHTML = function () {
  var html = '';
  html += this.compra.toUpperCase() + '<br>';
  html += '<br><br>';
  return html;
}

function mergeHTML (){
  var html = '';
  for (i=0; i<productos.length; i++){
    html += productos[i].toHTML();
  }
  return html;
}
function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}
var addCompra = document.getElementById('nuevacompra');
addCompra.onclick = function() {
  var compra = prompt('Ingrese su nueva compra');
  var product  = new Producto (compra, cantidad);
  productos.push(product);
  printHTML(product.toHTML());
};
var printAll = document.getElementById('print');
printAll.onclick = function() {
  printHTML(mergeHTML());
}