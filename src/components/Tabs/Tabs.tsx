import styles from './Tabs.module.css';

export default function Tabs({
    options,
    selectedOption,
    onChange,
    name,
}: {
    options: readonly { id: string; name: string }[];
    selectedOption: { id: string; name: string };
    onChange: (value: { id: string; name: string }) => void;
    name: string;
}) {
    return (
        <div className={styles.tablist}>
            {options.map((option) => (
                <label
                    key={option.id}
                    className={styles.tab}
                    data-selected={selectedOption.id === option.id}
                >
                    {option.name}
                    <input
                        name={name}
                        type="radio"
                        value={option.id}
                        defaultChecked={selectedOption.id === option.id}
                        onChange={() => onChange(option)}
                    />
                </label>
            ))}
        </div>
    );
}
