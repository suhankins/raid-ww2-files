'use client';

import Button from '@/components/Button/Button';
import Textbox from '@/components/Textbox/Textbox';
import { useRouter } from 'next/navigation';
import { type FormEvent } from 'react';
import styles from './SteamIDInputForm.module.css';

export default function SteamIDInputForm() {
    const router = useRouter();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const steamid = formData.get('steamid');
        if (steamid) {
            router.push(`/${encodeURIComponent(steamid.toString())}`);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className={'limited-width ' + styles.form}
            role="search"
            action="q"
        >
            <Textbox
                type="search"
                placeholder="https://steamcommunity.com/id/wolfgang"
                name="steamid"
            >
                Enter Raider&apos;s Steam ID or their profile URL
            </Textbox>
            <Button type="submit">Search</Button>
        </form>
    );
}
