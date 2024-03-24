export interface Character {
    id: number, 
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    }
}
export interface Creator {
    id: number, 
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    }
}

export interface CharacterProps {
    results : Character[]
}

export interface CreatorProps {
    results : Creator[]
}