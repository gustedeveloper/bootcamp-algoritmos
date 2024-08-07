// Eliminando el dígito de control

export const eliminaUltimoDigito = (cadena: string): string => {
  if (!cadena) {
    throw new Error("No se ha introducido una cadena");
  }
  return cadena.slice(0, -1);
};

// Obteniendo el último dígito

export const obtenerUltimoDigito = (cadena: string): number => {
  if (!cadena) {
    throw new Error("No se ha introducido una cadena");
  }
  const ultimoDigito = cadena.slice(-1);
  return parseInt(ultimoDigito);
};

// Recorriendo el string del revés y multiplicando por 2 y saltando uno

export const multiplicaPorDosSaltandoUno = (cadena: string): number[] => {
  if (!cadena) {
    throw new Error("No se ha introducido una cadena");
  }

  let resultado: number[] = [];
  let porDos = true;

  for (let i = cadena.length - 1; i >= 0; i--) {
    const nuevoNumero = porDos ? parseInt(cadena[i]) * 2 : parseInt(cadena[i]);
    resultado = [nuevoNumero, ...resultado];
    porDos = !porDos;
  }

  return resultado;
};

// Sumando decenas y unidades

const sumaDecenasUnidades = (numero: number): number => {
  if (numero < 10) return numero;

  const unidades = numero % 10;
  const decenas = Math.floor(numero / 10);
  return unidades + decenas;
};

export const sumaDecenasUnidadesColeccion = (numeros: number[]): number[] => {
  if (!numeros) {
    throw new Error("No se ha introducido una cadena");
  }
  return numeros.map(sumaDecenasUnidades);
};

// Sumar los dígitos

export const sumaDigitos = (numero: number[]): number => {
  if (!numero) {
    throw new Error("No se ha introducido una cadena");
  }
  const sumaDigitos = numero.reduce((acc, numero) => acc + numero, 0);
  return sumaDigitos;
};

// Calculando el flag

export const calculaFlagDeSumaTotal = (sumaTotal: number): number => {
  if (!sumaTotal) {
    throw new Error("No se ha introducido una cadena");
  }
  const flag = 10 - (sumaTotal % 10);
  return flag;
};
