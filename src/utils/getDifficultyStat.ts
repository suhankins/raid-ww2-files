import { type ISteamStats } from '@/lib/ISteamStats';

export default function getDifficultyStat(
    stats: ISteamStats,
    id: string,
    status: 'success' | 'failure'
) {
    return stats[`${id}_${status}`] || 0;
}
