class Grafo {
    constructor() {
        this.attribute1 = defaultValue;
        this.attribute2 = null;
        this.attribute3 = null;
    }
}

class Nodo {
    constructor() {
        this.enlaces = [];
    }

    getEnlaces() {
        return this.enlaces;
    }

    funcInfoGeo() {
    }
}

class Enlace extends Grafo {
    constructor() {
        super();
    }
}

class Ciudad extends Nodo {
    constructor() {
        super();
        this.estadoEspecifico = null;
    }

    funcInfoGeo() {
    }
}

class Industria extends Nodo {
    constructor() {
        super();
        this.estadoEspecifico = null;
    }

    funcInfoGeo() {
    }
}

class LugarTurismo extends Nodo {
    constructor() {
        super();
        this.estadoEspecifico = null;
    }

    funcInfoGeo() {
    }
}

class Exportar {
    exportXml(nodos, enlaces) {
    }
}
