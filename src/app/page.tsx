import Tooltip from '@/components/Tooltip/Tooltip';
import { Calendar } from './_components/Calendar/Calendar';

export default function Home() {
    return (
        <main className="limited-width">
            <h1>RAID: World War II Files</h1>
            <p>
                Here you can view data our spies have collected on members of
                the RAID gang.
            </p>

            <Calendar />
            <Tooltip />
        </main>
    );
}
