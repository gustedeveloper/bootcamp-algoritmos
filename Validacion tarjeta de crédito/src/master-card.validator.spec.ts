import { validaTarjetaMasterCard } from "./master-card.validator";

describe("validaTarjetaMasterCard", () => {
  it("debería devolver un throw si la entrada es undefined", () => {
    // Arrange
    const numeroTarjeta: any = undefined;

    // Act
    const result = () => validaTarjetaMasterCard(numeroTarjeta);

    // Assert
    expect(result).toThrowError(
      "No se ha introducido un número de tarjeta correcto"
    );
  });
  it("debería devolver un throw si la entrada es null", () => {
    // Arrange
    const numeroTarjeta: any = null;

    // Act
    const result = () => validaTarjetaMasterCard(numeroTarjeta);

    // Assert
    expect(result).toThrowError(
      "No se ha introducido un número de tarjeta correcto"
    );
  });
  it("debería devolver un throw si la entrada es un string vacío", () => {
    // Arrange
    const numeroTarjeta = "";

    // Act
    const result = () => validaTarjetaMasterCard(numeroTarjeta);

    // Assert
    expect(result).toThrowError(
      "No se ha introducido un número de tarjeta correcto"
    );
  });
  it("debería devolver un throw si la entrada no se puede convertir a un número", () => {
    // Arrange
    const numeroTarjeta = "abalkajdañlkdjseo";

    // Act
    const result = () => validaTarjetaMasterCard(numeroTarjeta);

    // Assert
    expect(result).toThrowError(
      "No se ha introducido un número de tarjeta correcto"
    );
  });
  it("debería devolver un throw si la entrada no tiene 16 dígitos", () => {
    // Arrange
    const numeroTarjeta = "123456789";

    // Act
    const result = () => validaTarjetaMasterCard(numeroTarjeta);

    // Assert
    expect(result).toThrowError(
      "No se ha introducido un número de tarjeta correcto"
    );
  });

  it.each([
    ["5506927427317625", true],
    ["5553042241984105", true],
    ["5555553753048194", true],
    ["5506927627317626", false],
    ["5553042241944106", false],
    ["5525553753048195", false],
  ])(
    "si la entrada es %s debería devolver %s",
    (numeroTarjeta: string, expected: boolean) => {
      // Arrange

      // Act
      const result = validaTarjetaMasterCard(numeroTarjeta);

      // Assert
      expect(result).toBe(expected);
    }
  );
});
