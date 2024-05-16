export default function ErrorCard({ e }: { e: unknown }) {
    return (
        <main>
            <div role="alert">
                <h1>Our spies came back empty handed!</h1>
                <p>{(e instanceof Error && e.message) || 'Unknown error'}</p>
                <p>
                    Check that SteamID or their profile URL is correct, or try
                    again later.
                </p>
            </div>
        </main>
    );
}
