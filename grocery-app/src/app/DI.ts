// without DI
// class Tyre{

// }

// class Engine{

// }

// class Car{
//   engine: Engine = '';
//   tyre: Tyre =  '';

//   constructor(){
//     this.engine = new Engine();
//     this.tyre = new Tyre();
//   }

// }




// With DI
class Tyre{
  constructor(type: string){

  }
}

class Engine{
  constructor(type: string){

  }
}

const engineObj = new Engine();
const tyreObj = new Tyre();

class Car{
  engine: Engine = '';
  tyre: Tyre =  '';

  constructor(engineObj: Engine, tyreObj: Tyre){
    this.engine = engineObj;
    this.tyre = tyreObj;
  }

}
