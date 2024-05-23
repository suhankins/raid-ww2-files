import styles from './Tabs.module.css';

export default function Tabs({
    options,
    selectedOption,
    onChange,
    name,
    inline,
}: {
    options: readonly { id: string; name: string }[];
    selectedOption: { id: string; name: string };
    onChange: (value: { id: string; name: string }) => void;
    name: string;
    inline?: boolean;
}) {
    return (
        <div className={styles.tablist} data-inline={inline}>
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
