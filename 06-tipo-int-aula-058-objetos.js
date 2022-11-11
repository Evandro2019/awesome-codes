class Carro {
    constructor(pnome, ptipo) {
        this.nome = pnome;
        if(ptipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        }else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 100
        }else if(ptipo == 3){
            this.tipo = "Passeio"
            this.velmax = 160
        }else{
            this.tipo = "Militar"
            this.velmax = 180
        }
        
    }
    info(){
       console.log('Nome.: '+this.nome) 
       console.log('Tipo.: '+this.tipo) 
       console.log('V. max: '+this.velmax) 
       console.log('---------------------------')
     }
     infoTs(){
        console.log(`Nome.: ${this.nome}`) 
        console.log(`Tipo.: ${this.tipo}`) 
        console.log(`V.Max: ${this.velmax}`) 
        console.log('---------------------------')
      }



}


let c1 = new Carro('Ford Mustang ',1);
let c2 = new Carro('Fiat Strada',2);
let c3 = new Carro('Humvee-Hummer H1',4);
let c4 = new Carro('Nissan',3);

//top
console.log('function info() com concatenação ')
c1.info();
c2.info();
c3.info();
c4.info();

//console.log(c1.nome, c1.tipo, c1.velmax)
console.log('function infoTs() com template string')
c1.infoTs();
c2.infoTs();
c3.infoTs();
c4.infoTs();
/*
console.log(c2.nome, c2.tipo)
console.log(c3.nome, c3.tipo)
console.log(c4.nome, c4.tipo)

*/
