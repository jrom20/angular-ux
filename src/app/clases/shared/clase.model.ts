export interface IClase
{
    id: number,
    name: string,
    time: string,
    location?: {
        room: string,
        campus: string
    },
    ImageUrl?: string,
    secciones?: ISecciones[]
}

export interface ISecciones
{
    id: number,
    name: string,
    Profesor: string
}