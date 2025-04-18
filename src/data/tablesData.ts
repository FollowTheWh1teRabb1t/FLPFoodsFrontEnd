export interface Mesa {
    id: number;
    status: "disponível" | "reservada";
}

export const mesasData: Mesa[] = [
    {id: 1, status: 'disponível'},
    {id: 2, status: 'disponível'},
    {id: 3, status: 'disponível'},
    {id: 4, status: 'disponível'},
    {id: 5, status: 'disponível'},
]