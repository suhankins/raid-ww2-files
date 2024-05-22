import styles from './Button.module.css';

export default function Button({
    children,
    ...props
}: {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={styles.raidButton} {...props}>
            {children}
        </button>
    );
}
