export interface IOnibus {
    id: number;
    motorista: string;
    destino: string;
    origem: number;
}
export interface IAssento {
    id: number;
    numero: number;
    onibus: Onibus;
    passageiro: string;
}
