let autos = require('./autos')

let concesionaria = {
   autos: autos,
 
   buscarAuto : function(codigo){
      for(let j = 0; j < autos.length; j++){
         if (autos [ j ] . patente == codigo){
            return autos [ j ];
         } else {
            return null;
         }
      }
   },

   venderAuto: function(codigo){
      var automovil = this.buscarAuto(codigo);
      if (automovil !== null){
        automovil.vendido = true;
        return automovil;
      }
   }
}

console.log(concesionaria.venderAuto("APL123"));