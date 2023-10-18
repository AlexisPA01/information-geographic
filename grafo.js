const xmlbuilder = require('xmlbuilder');

class Grafo {
  constructor() {
    this.nodos = [];
    this.enlaces = [];
  }

  agregarNodo(nodo) {
    this.nodos.push(nodo);
  }

  agregarEnlace(enlace) {
    this.enlaces.push(enlace);
  }

  recorrerGrafo() {
    console.log('Nodos en el grafo:');
    this.nodos.forEach(nodo => {
      console.log(nodo);
    });

    console.log('\nEnlaces en el grafo:');
    this.enlaces.forEach(enlace => {
      console.log(enlace);
    });
  }
}

class Nodo {
  constructor(estadoComun) {
    this.estadoComun = estadoComun;
  }
}

class Ciudad extends Nodo {
  constructor(estadoComun, nombre, poblacion) {
    super(estadoComun);
    this.nombre = nombre;
    this.poblacion = poblacion;
  }
}

class Industria extends Nodo {
  constructor(estadoComun, nombre, tipo) {
    super(estadoComun);
    this.nombre = nombre;
    this.tipo = tipo;
  }
}

class LugarTuristico extends Nodo {
  constructor(estadoComun, nombre, descripcion) {
    super(estadoComun);
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

class Exportar {
  constructor(grafo) {
    this.grafo = grafo;
  }

  exportarXML() {
    const root = xmlbuilder.create('grafo');

    this.grafo.nodos.forEach(nodo => {
      const nodeElement = root.ele('nodo', { tipo: nodo.constructor.name });
      nodeElement.ele('estadoComun', nodo.estadoComun);

      if (nodo.constructor.name === 'Ciudad') {
        nodeElement.ele('nombre', nodo.nombre);
        nodeElement.ele('poblacion', nodo.poblacion);
      } else if (nodo.constructor.name === 'Industria') {
        nodeElement.ele('nombre', nodo.nombre);
        nodeElement.ele('tipo', nodo.tipo);
      } else if (nodo.constructor.name === 'LugarTuristico') {
        nodeElement.ele('nombre', nodo.nombre);
        nodeElement.ele('descripcion', nodo.descripcion);
      }
    });

    return root.end({ pretty: true });
  }
}

const grafo = new Grafo();
const ciudad1 = new Ciudad('Común', 'Ciudad A', 100000);
const industria1 = new Industria('Común', 'Industria X', 'Manufactura');
const lugarTuristico1 = new LugarTuristico('Común', 'Lugar Turístico Y', 'Descripción del lugar');

grafo.agregarNodo(ciudad1);
grafo.agregarNodo(industria1);
grafo.agregarNodo(lugarTuristico1);

grafo.recorrerGrafo();

const exportador = new Exportar(grafo);
const xml = exportador.exportarXML();

console.log('\nGrafo en formato XML:');
console.log(xml);
