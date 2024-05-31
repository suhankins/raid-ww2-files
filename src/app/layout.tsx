import AnimatedBackground from '@/components/AnimatedBackground/AnimatedBackground';
import './globals.css';

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
                {children}
            </body>
        </html>
    );
}
