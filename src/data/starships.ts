export interface Starship {
    id: number;
    name: string;
    status: 'online' | 'offline';
};

export const starships: Starship[] = [
    { id: 1, name: 'USS Enterprise', status: 'online' },
    { id: 2, name: 'USS Voyager', status: 'online' },
    { id: 3, name: 'USS Defiant', status: 'online' },
    { id: 4, name: 'USS Discovery', status: 'offline' },
];
