const characters = [
    { id: 'none', description: 'Raider could not be identified' },
    { id: 'russian', description: 'Known as Kurgan' },
    { id: 'german', description: 'Known as Wolfgang' },
    { id: 'british', description: 'Known as Sterling' },
    { id: 'american', description: 'Known as Rivet' },
];

export default function getCharaterFromIndex(index: number) {
    return characters[index];
}
