import SteamIDInputForm from './SteamIDInputForm/SteamIDInputForm';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <SteamIDInputForm />
            {children}
        </div>
    );
}
