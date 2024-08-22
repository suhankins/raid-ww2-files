import styles from './Tabs.module.css';

export default function Tabs({
    options,
    selectedOption,
    onChange,
    name,
    inline,
    id,
    htmlFor,
}: {
    options: readonly { id: string; name: string }[];
    selectedOption: { id: string; name: string };
    onChange: (value: { id: string; name: string }) => void;
    name: string;
    inline?: boolean;
    id?: string;
    htmlFor?: string;
}) {
    return (
        <div
            className={styles.tablist}
            data-inline={inline}
            role="tablist"
            id={id}
        >
            {options.map((option) => (
                <input
                    role="tab"
                    key={option.id}
                    className={styles.tab}
                    name={name}
                    type="radio"
                    value={option.id}
                    defaultChecked={selectedOption.id === option.id}
                    onChange={() => onChange(option)}
                    aria-label={option.name}
                    aria-controls={htmlFor}
                />
            ))}
        </div>
    );
}
