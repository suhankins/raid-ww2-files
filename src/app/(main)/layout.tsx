export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <form>
                <input type="text" placeholder="Steam ID" />
                <button>Submit</button>
            </form>
            {children}
        </main>
    );
}
