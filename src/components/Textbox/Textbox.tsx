import styles from './Textbox.module.css';

export default function Textbox({
    children,
    ...props
}: { children: React.ReactNode } & React.HTMLProps<HTMLInputElement>) {
    return (
        <label className={styles.label}>
            <p>{children}</p>
            <input className={styles.raidInput} {...props} />
        </label>
    );
}
