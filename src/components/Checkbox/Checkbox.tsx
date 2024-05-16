import styles from './Checkbox.module.css';

export default function Checkbox({
    children,
    checked,
    onChange,
}: {
    children: React.ReactNode;
    checked: boolean;
    onChange: (value: boolean) => void;
}) {
    return (
        <label className={styles.label}>
            <span className={styles.labelText}>{children}</span>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className={styles.checkbox}
            />
        </label>
    );
}
