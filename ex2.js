/**
 * En este mundo de fantasía hay diferentes tipos de clases de personaje.
 * Cada clase define unos poderes y habilidades en concreto.
 * Además, por el hecho de ser de una clase u otra, algunos de sus características quedan alteradas a la hora de crearl
 * 
 * http://carmensminiaturepainting.blogspot.com/2011/03/elf-sniper-and-d-classes.html
 * 
 * 
 * - Extiende https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes#subclases_con_extends la clase 'Personaje' y crea dos subclases 
 * 
 * La clase 'Clerigo' es un Personaje curandero que tiene las siguientes características:
 *    - Por el hecho de ser Clérigo, en el momento de instanciarlo, hay que restar 1 punto de fuerza y sumar un punto de inteligencia
 *    - Posee un método de nombre 'curar'. Si se usa sin parámetros, se cura a si mismo tantos puntos de vida como el valor de su inteligencia. Si se invoca sobre otro personaje, le cura a el dichos puntos de vida. Nota: para simplificar, vamos a pensar que un personaje se puede curar por encima de sus puntos de vida
 * 
 *      curar(personaje = undefined) 
 * 
 * 
 * La clase 'Guerrero' es un Personaje focalizado en el combate cuerpo a cuerpo:
 * 
 *    - Por el hecho de ser Guerrero, en el momento de instanciarlo, hay que restar 1 punto de inteligencia y sumar un punto a su fuerza
 *    - Posee un método 'mamporro'. El método asesta un golpe de tantos puntos de daño como la fuerza del guerrero
 * 
 *     mamporro()
 * 
 * 
 * - En el fichero ex2REsultado.txt tienes una simulación de lo que debería dar los mensajes por consola. 
 * - 
 *     
 */

class Personaje {
    constructor(nombre, raza, vida, caracteristicas, experiencia){
        this.nombre = nombre
        this.raza = raza
        this.vida = vida
        this.caracteristicas = caracteristicas
        this.experiencia = 0
    }
    ataqueFisico(){
        console.log("Hay un ataque físico")
    }
}
let caracteristicas = {
    fuerza: 12,
    agilidad: 15,
    resistencia: 9,
    inteligencia: 17
}

class Clerigo extends Personaje{
    constructor(nombre, raza, vida, caracteristicas) {
        const caracteristicas_modificadas = {
            fuerza: caracteristicas.fuerza - 1,
            agilidad: caracteristicas.agilidad,
            resistencia: caracteristicas.resistencia,
            inteligencia: caracteristicas.inteligencia + 1
        }
        super(nombre, raza, vida, caracteristicas_modificadas)
    }

    curar(personaje){
        if (!personaje){
            this.vida += this.caracteristicas.inteligencia
        }
        else{
            personaje.vida += this.caracteristicas.inteligencia
        }
    }
}

class Guerrero extends Personaje {
    constructor(nombre, raza, vida, caracteristicas) {
        const caracteristicas_modificadas = {
            fuerza: caracteristicas.fuerza + 1,
            agilidad: caracteristicas.agilidad,
            resistencia: caracteristicas.resistencia,
            inteligencia: caracteristicas.inteligencia - 1
        }
        super(nombre, raza, vida, caracteristicas_modificadas)
    }
    mamporro(){
        console.log(this.nombre + " ha dado un mamporrazo de "+ this.caracteristicas.fuerza + " puntos de fuerza")
    }
}

// 1. Crear Clerigo
let personaje = new Clerigo('Arod', 'Elfo', 150, caracteristicas)
console.log(personaje)

// // 2. Simulamos que sufre daño y se cura
personaje.vida -= 50
console.log("Sufre 50 puntos de daño:", personaje)
personaje.curar()
console.log("Después de curarse:", personaje)

// // 3. Creamos ahora un guerrero
let stats_warrior = {
    fuerza: 15,
    agilidad: 11,
    resistencia: 14,
    inteligencia: 10
}

let guerrero = new Guerrero('Casey', 'Humano', 180, stats_warrior)
console.log("Guerrero", guerrero)

// // 4. Casey da un mamporrazo a un supuesto enemigo
guerrero.mamporro()

// // 5. Casey recibe daño y el clérigo le cura
guerrero.vida -= 50
console.log("Guerrero ha recibido 50 puntos de daño: ", guerrero)
personaje.curar(guerrero)
console.log("El Clérigo le ha curado: ", guerrero)

// //6. Este método debería dar un error al invocarlo, pues los clérigos no pueden dar mamporros
 personaje.mamporro()