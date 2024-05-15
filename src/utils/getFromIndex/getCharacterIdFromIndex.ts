const characters = [
    { id: 'none', name: 'Unknown' },
    { id: 'russian', name: 'Kurgan' },
    { id: 'german', name: 'Wolfgang' },
    { id: 'british', name: 'Sterling' },
    { id: 'american', name: 'Rivet' },
];

export default function getCharaterFromIndex(index: number) {
    return characters[index];
}
