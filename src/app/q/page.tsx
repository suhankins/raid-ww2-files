export const dynamic = 'force-dynamic';
export const runtime = 'edge';

import { redirect } from 'next/navigation';
import ErrorCard from '../[steamid]/ErrorCard';
import resolveSteamId from '../[steamid]/_utils/resolveSteamId';

/**
 * This is the page user request gets redirected to if JS didn't load
 * and native form submission worked.
 *
 * It has to be a 1 letter path, because any string
 * 2 characters and longer is a valid vanity url as far as I'm aware.
 *
 * We also can't handle this in [steamid] page, because that page is static.
 */
export default async function QueryPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const steamid = (await searchParams).steamid;
    if (typeof steamid !== 'string') {
        return (
            <ErrorCard
                e={
                    new Error('No SteamID provided!', {
                        cause: `type of query steamid: ${typeof steamid}`,
                    })
                }
            />
        );
    }

    const resolvedId = await resolveSteamId(decodeURIComponent(steamid)).catch(
        (e) => e as Error
    );

    if (resolvedId instanceof Error) {
        return <ErrorCard e={resolvedId} />;
    }
    redirect(`/${steamid}`);
}
