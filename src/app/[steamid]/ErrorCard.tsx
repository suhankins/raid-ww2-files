export default function ErrorCard({ e }: { e: unknown }) {
    return (
        <main className="limited-width">
            <div role="alert">
                <h1>Our spies came back empty handed!</h1>
                <p>{e instanceof Error ? e.message : 'Unknown error'}</p>
                <p>
                    Check that SteamID or profile URL is correct, or try again
                    later.
                </p>
                <br />
                {e instanceof Error && (
                    <details>
                        <summary>Technical information</summary>
                        <code>{e.stack}</code>
                    </details>
                )}
            </div>
        </main>
    );
}
