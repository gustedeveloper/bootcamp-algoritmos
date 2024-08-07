import {
  eliminaUltimoDigito,
  obtenerUltimoDigito,
  multiplicaPorDosSaltandoUno,
  sumaDecenasUnidadesColeccion,
  sumaDigitos,
  calculaFlagDeSumaTotal,
} from "./master-card.helpers";

// Eliminando el dígito de control

describe("eliminaUltimoDigito", () => {
  it("debería devolver un throw si la entrada es undefined", () => {
    // Arrange
    const cadena: any = undefined;

    // Act
    const result = () => eliminaUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver un throw si la entrada es null", () => {
    // Arrange
    const cadena: any = null;

    // Act
    const result = () => eliminaUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver un throw si la entrada es un string vacío", () => {
    // Arrange
    const cadena: any = "";

    // Act
    const result = () => eliminaUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver el número sin el último dígito", () => {
    // Arrange
    const cadena = "12345678910";

    // Act
    const result = eliminaUltimoDigito(cadena);

    // Assert
    const numeroSinUltimoDigito = "1234567891";

    expect(result).toEqual(numeroSinUltimoDigito);
  });
});

// Obteniendo el último dígito

describe("obtenerUltimoDigito", () => {
  it("debería devolver un throw si la entrada es undefined", () => {
    // Arrange
    const cadena: any = undefined;

    // Act
    const result = () => obtenerUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver un throw si la entrada es null", () => {
    // Arrange
    const cadena: any = null;

    // Act
    const result = () => obtenerUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver un throw si la entrada es un string vacío", () => {
    // Arrange
    const cadena: any = "";

    // Act
    const result = () => obtenerUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver el último dígito en formato number", () => {
    // Arrange
    const cadena = "12345678910";

    // Act
    const result = obtenerUltimoDigito(cadena);

    // Assert
    const ultimoDigito = 0;

    expect(result).toEqual(ultimoDigito);
  });
});

// Recorriendo el string del revés y multiplicando por 2 y saltando uno

describe("multiplicaPorDosSaltandoUno", () => {
  it("debería devolver un throw si la entrada es undefined", () => {
    // Arrange
    const cadena: any = undefined;

    // Act
    const result = () => multiplicaPorDosSaltandoUno(cadena);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver un throw si la entrada es null", () => {
    // Arrange
    const cadena: any = null;

    // Act
    const result = () => multiplicaPorDosSaltandoUno(cadena);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver un throw si la entrada es un string vacío", () => {
    // Arrange
    const cadena: any = "";

    // Act
    const result = () => multiplicaPorDosSaltandoUno(cadena);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver un array de números, del string inicial recorrido del revés y multiplicado el primer elemento del final por 2, saltar uno y así", () => {
    // Arrange
    const cadena = "123456789";

    // Act
    const result = multiplicaPorDosSaltandoUno(cadena);

    // Assert
    const arrayResultado = [2, 2, 6, 4, 10, 6, 14, 8, 18];

    expect(result).toEqual(arrayResultado);
  });

  it("debería devolver un array de números, del string inicial recorrido del revés y multiplicado el primer elemento del final por 2, saltar uno y así", () => {
    // Arrange
    const cadena = "8965713624558456";

    // Act
    const result = multiplicaPorDosSaltandoUno(cadena);

    // Assert
    const arrayResultado = [
      8, 18, 6, 10, 7, 2, 3, 12, 2, 8, 5, 10, 8, 8, 5, 12,
    ];

    expect(result).toEqual(arrayResultado);
  });

  it("debería devolver un array de números, del string inicial recorrido del revés y multiplicado el primer elemento del final por 2, saltar uno y así", () => {
    // Arrange
    const cadena = "8";

    // Act
    const result = multiplicaPorDosSaltandoUno(cadena);

    // Assert
    const arrayResultado = [16];

    expect(result).toEqual(arrayResultado);
  });

  it("debería devolver un array de números, del string inicial recorrido del revés y multiplicado el primer elemento del final por 2, saltar uno y así", () => {
    // Arrange
    const cadena = "896";

    // Act
    const result = multiplicaPorDosSaltandoUno(cadena);

    // Assert
    const arrayResultado = [16, 9, 12];

    expect(result).toEqual(arrayResultado);

    it("debería devolver un array de números, del string inicial recorrido del revés y multiplicado el primer elemento del final por 2, saltar uno y así", () => {
      // Arrange
      const cadena = "12";

      // Act
      const result = multiplicaPorDosSaltandoUno(cadena);

      // Assert
      const arrayResultado = [1, 4];

      expect(result).toEqual(arrayResultado);
    });
  });
});

// Sumando decenas y unidades

describe("sumaDecenasUnidades", () => {
  it("debería devolver un throw si la entrada es undefined", () => {
    // Arrange
    const numeros: any = undefined;

    // Act
    const result = () => sumaDecenasUnidadesColeccion(numeros);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver un throw si la entrada es null", () => {
    // Arrange
    const numeros: any = null;

    // Act
    const result = () => sumaDecenasUnidadesColeccion(numeros);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver un array con los números de dos cifras sumados decimales y unidades y el resto de números igual", () => {
    // Arrange
    const numeros = [8, 18, 6, 10, 7, 2, 3, 12, 2, 8, 5, 10, 8, 8, 5, 12];

    // Act
    const result = sumaDecenasUnidadesColeccion(numeros);

    // Assert
    const resultado = [8, 9, 6, 1, 7, 2, 3, 3, 2, 8, 5, 1, 8, 8, 5, 3];

    expect(result).toEqual(resultado);
  });

  it("debería devolver un array con los números de dos cifras sumados decimales y unidades y el resto de números igual", () => {
    // Arrange
    const numeros = [1, 2, 18, 4, 5, 12, 7, 14, 9];

    // Act
    const result = sumaDecenasUnidadesColeccion(numeros);

    // Assert
    const resultado = [1, 2, 9, 4, 5, 3, 7, 5, 9];

    expect(result).toEqual(resultado);
  });
});

// Sumar los dígitos

describe("sumaDigitos", () => {
  it("debería devolver un throw si la entrada es undefined", () => {
    // Arrange
    const numero: any = undefined;

    // Act
    const result = () => sumaDigitos(numero);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver un throw si la entrada es null", () => {
    // Arrange
    const numero: any = null;

    // Act
    const result = () => sumaDigitos(numero);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver la suma de los dígitos de un array de números", () => {
    // Arrange
    const numero = [8, 9, 6, 1, 7, 2, 3, 3, 2, 8, 5, 1, 8, 8, 5, 3];

    // Act
    const result = sumaDigitos(numero);

    // Assert
    const resultado = 79;

    expect(result).toEqual(resultado);
  });
  it("debería de devolver la suma de los dígitos de un array de números", () => {
    // Arrange
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Act
    const result = sumaDigitos(numeros);

    // Assert
    const resultado = 45;

    expect(result).toBe(resultado);
  });
});

// Calculando el flag

describe("calculaFlagDeSumaTotal", () => {
  it("debería devolver un throw si la entrada es undefined", () => {
    // Arrange
    const sumaTotal: any = undefined;

    // Act
    const result = () => calculaFlagDeSumaTotal(sumaTotal);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver un throw si la entrada es null", () => {
    // Arrange
    const sumaTotal: any = null;

    // Act
    const result = () => calculaFlagDeSumaTotal(sumaTotal);

    // Assert
    expect(result).toThrowError("No se ha introducido una cadena");
  });

  it("debería devolver 4, si la suma total es 26", () => {
    // Arrange
    const sumaTotal: number = 26;

    // Act
    const result = calculaFlagDeSumaTotal(sumaTotal);

    // Assert
    const resultado = 4;

    expect(result).toEqual(resultado);
  });

  it("debería devolver 7 si la suma total es 73", () => {
    // Arrange
    const sumaTotal = 73;

    // Act
    const result = calculaFlagDeSumaTotal(sumaTotal);

    // Assert
    expect(result).toBe(7);
  });
  it("debería devolver 3 si la suma total es 67", () => {
    // Arrange
    const sumaTotal = 67;

    // Act
    const result = calculaFlagDeSumaTotal(sumaTotal);

    // Assert
    expect(result).toBe(3);
  });
});
