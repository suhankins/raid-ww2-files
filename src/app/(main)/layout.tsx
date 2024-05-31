import FooterContent from './FooterContent/FooterContent';
import SteamIDInputForm from './SteamIDInputForm/SteamIDInputForm';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header>
                <SteamIDInputForm />
            </header>
            <main>{children}</main>
            <FooterContent />
        </>
    );
}
