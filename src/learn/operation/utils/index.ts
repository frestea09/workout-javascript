export type typeGetAddtion = {
  inputPertama: number;
  inputKedua: number;
};
export const getAddtion = (inputPertama: number, inputKedua: number): number =>
  inputPertama + inputKedua;

export type typeGetPengurangan = {
  inputPertama: number;
  inputKedua: number;
};
export const getPengurangan = (
  inputPertama: number,
  inputKedua: number
): number => inputPertama - inputKedua;

export const getKalit = (inputPertama: number, inputKedua: number): number =>
  inputPertama * inputKedua;

export const getBagi = (inputPertama: number, inputKedua: number): number =>
  inputPertama / inputKedua;
