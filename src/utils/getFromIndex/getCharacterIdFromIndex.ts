const characters = [
    { id: 'none', description: 'Unknown raider' },
    { id: 'russian', description: 'Kurgan' },
    { id: 'german', description: 'Wolfgang' },
    { id: 'british', description: 'Sterling' },
    { id: 'american', description: 'Rivet' },
];

export default function getCharaterFromIndex(index: number) {
    return characters[index];
}
