export default function ErrorCard({ e }: { e: unknown }) {
    return (
        <main className="limited-width">
            <div role="alert">
                <h1>Our spies came back empty handed!</h1>
                {e instanceof Error ? (
                    <>
                        <p>{e.message}</p>
                        <code>{e.stack}</code>
                    </>
                ) : (
                    <p>Unknown error</p>
                )}
                <p>
                    Check that SteamID or profile URL is correct, or try again
                    later.
                </p>
            </div>
        </main>
    );
}
