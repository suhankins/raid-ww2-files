'use client';
import dynamic from 'next/dynamic';
import { Calendar } from './Calendar';

export function CalendarNoSSRWrapper() {
    const NoSSRCalendar = dynamic(async () => Calendar, { ssr: false });
    return <NoSSRCalendar />;
}
