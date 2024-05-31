import AnimatedBackground from '@/app/_components/AnimatedBackground/AnimatedBackground';
import './globals.css';
import SteamIDInputForm from './_components/SteamIDInputForm/SteamIDInputForm';
import FooterContent from './_components/FooterContent/FooterContent';

export const metadata = {
    title: 'RAID: World War II Files',
    description: 'View your RAID: World War II stats',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AnimatedBackground />
                <header>
                    <SteamIDInputForm />
                </header>
                <main>{children}</main>
                <footer>
                    <FooterContent />
                </footer>
            </body>
        </html>
    );
}
