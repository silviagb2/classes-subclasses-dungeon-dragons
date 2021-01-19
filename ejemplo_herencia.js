class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad
  }

  hablar() {
    console.log(this.nombre + ' hace un ruido.');
  }
}

class Perro extends Animal {
  hablar() {
    console.log(this.nombre + ' ladra.');
  }
}

class Gato extends Animal {
  // El Gato tiene un parámetro opcional, que es el número de vidas
  // Si no esta 'seteado', el número de vidas tiene que ser 7
  
  constructor(nombre, edad, vidas) {
    super(nombre, edad)

    this.vidas = vidas? vidas : 7
  }
  hablar() {
    super.hablar()
    console.log(this.nombre + ' maulla.');
  }
  ronronear() {
    console.log('prrrrrrrr')
  }
}


let animal1 = new Perro("Boby", 3)
let animal2 = new Gato("Loki", 1)
let animal3 = new Gato("Canela", 0.5, 5)

console.log("Vidas de Loki: ", animal2.vidas)
console.log("Vidas de Canela: ", animal3.vidas)

animal3.hablar()




// let animalesRandom = [animal1, animal2, animal3]
// animalesRandom.forEach(animal =>{
//   animal.hablar()
// })
