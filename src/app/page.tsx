import Tooltip from '@/components/Tooltip/Tooltip';
import { CalendarNoSSRWrapper } from './_components/Calendar/CalendarNoSSRWrapper';

export default function Home() {
    return (
        <main className="limited-width">
            <h1>RAID: World War II Files</h1>
            <p>
                Here you can view data our spies have collected on members of
                the RAID gang.
            </p>

            <CalendarNoSSRWrapper />
            <Tooltip />
        </main>
    );
}
