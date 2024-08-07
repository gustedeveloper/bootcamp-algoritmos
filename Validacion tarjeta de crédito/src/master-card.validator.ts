/*
Tarjetas válidas:
5506927427317625;
5553042241984105;
5555553753048194;
5555555555554444;

Tarjetas no válidas:
5506927627317626;
5553042241944106;
5525553753048195;
5554555555554445;

*/

import {
  eliminaUltimoDigito,
  obtenerUltimoDigito,
  multiplicaPorDosSaltandoUno,
  sumaDecenasUnidadesColeccion,
  sumaDigitos,
  calculaFlagDeSumaTotal,
} from "./master-card.helpers";

const estaLaTCBienFormada = (numeroTarjeta: string) => {
  if (
    !numeroTarjeta ||
    numeroTarjeta.length !== 16 ||
    isNaN(parseInt(numeroTarjeta))
  ) {
    throw new Error("No se ha introducido un número de tarjeta correcto");
  }
};

interface TarjetaMasterCard {
  masterCardSinDigitoControl: string;
  ultimoDigito: number;
}

const separaDigitoControl = (numeroTarjeta: string): TarjetaMasterCard => ({
  ultimoDigito: obtenerUltimoDigito(numeroTarjeta),
  masterCardSinDigitoControl: eliminaUltimoDigito(numeroTarjeta),
});

const calculaFlagDeValidacion = (
  masterCardSinDigitoControl: string
): number => {
  const masterCardMultiplicadaPorDos = multiplicaPorDosSaltandoUno(
    masterCardSinDigitoControl
  );
  const masterCardSumaDecenasUnidades = sumaDecenasUnidadesColeccion(
    masterCardMultiplicadaPorDos
  );
  const masterCardSumaTotal = sumaDigitos(masterCardSumaDecenasUnidades);

  return calculaFlagDeSumaTotal(masterCardSumaTotal);
};

export const validaTarjetaMasterCard = (numeroTarjeta: string): boolean => {
  estaLaTCBienFormada(numeroTarjeta);

  const { ultimoDigito, masterCardSinDigitoControl } =
    separaDigitoControl(numeroTarjeta);
  const flagControlCalculado = calculaFlagDeValidacion(
    masterCardSinDigitoControl
  );

  return flagControlCalculado === ultimoDigito;
};
