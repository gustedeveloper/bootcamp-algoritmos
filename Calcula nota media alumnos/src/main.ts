import "./style.css";

/*

Alumno           | Nota 1 | Nota 2 | Nota 3
Juan Pérez       |   7    |   8    |   9
María López      |   6    |   7    |   8
Andrés Ruiz      |   9    |   9    |  10
Laura Gómez      |   8    |   7    |   6
Carlos Sánchez   |   3    |   2    |   5
Ana Martínez     |  10    |   9    |  10
Sergio Torres    |   7    |   8    |   6
Isabel Rodríguez |   9    |  10    |   9

*/

export interface FichaAlumno {
  alumno: string;
  notas: number[];
}

export interface Notas {
  alumno: string;
  notaMedia: number;
}

export const calcularNotaMedia = (notas: number[]): number => {
  const numNotas = notas.length;
  const sumaNotas = notas.reduce((acc, nota) => acc + nota, 0);

  const notaMedia = sumaNotas / numNotas;

  const notaMediaRedondeada = Number(notaMedia.toFixed(2));

  return notaMediaRedondeada;
};

export const calcularNotaMediaAlumnos = (
  fichaAlumnos: FichaAlumno[]
): Notas[] => {
  const notasMedia: Notas[] = fichaAlumnos.map((fichaAlumno) => {
    const notaMedia = calcularNotaMedia(fichaAlumno.notas);
    return {
      alumno: fichaAlumno.alumno,
      notaMedia,
    };
  });
  return notasMedia;
};

export interface FichaFinalAlumno {
  alumno: string;
  notasPracticas: number[];
  notasExamenes: number[];
}

export interface CalificacionesAlumno {
  alumno: string;
  notaFinal: number;
}

export const calcularCalificacionAlumnos = (
  fichaFinalAlumnos: FichaFinalAlumno[]
): CalificacionesAlumno[] => {
  const notasFinales: CalificacionesAlumno[] = fichaFinalAlumnos.map(
    (fichaFinalAlumno) => {
      const notaMediaPracticas = calcularNotaMedia(
        fichaFinalAlumno.notasPracticas
      );
      const notaMediaExamenes = calcularNotaMedia(
        fichaFinalAlumno.notasExamenes
      );
      const notaFinal = calcularNotaFinal(
        notaMediaPracticas,
        notaMediaExamenes
      );
      return {
        alumno: fichaFinalAlumno.alumno,
        notaFinal,
      };
    }
  );
  return notasFinales;
};

export const calcularNotaFinal = (
  notaMediaPracticas: number,
  notaMediaExamenes: number
): number => {
  const valorNotasPracticas = notaMediaPracticas * 0.6;
  const valorNotasExamenes = notaMediaExamenes * 0.4;

  const notaFinal = valorNotasPracticas + valorNotasExamenes;
  const notaFinalRedondeada = Number(notaFinal.toFixed(2));
  return notaFinalRedondeada;
};
