const characters = [
    { id: 'none', name: 'Unknown raider', nationality: 'Unknown nationality' },
    { id: 'russian', name: 'Kurgan', nationality: 'Russian' },
    { id: 'german', name: 'Wolfgang', nationality: 'German' },
    { id: 'british', name: 'Sterling', nationality: 'British' },
    { id: 'american', name: 'Rivet', nationality: 'American' },
];

export default function getCharacterFromIndex(index: number) {
    return characters[index];
}
