'use client';

import styles from './Stepper.module.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import useOnChangeAddIndexCallback from './useOnChangeCallback';

export default function Stepper({
    options,
    selectedOption,
    onChange,
    id,
    children,
}: {
    options: readonly { id: string; name: string }[];
    selectedOption: { id: string; name: string };
    onChange: (value: { id: string; name: string }) => void;
    id?: string;
    children: React.ReactNode;
}) {
    const clickLeft = useOnChangeAddIndexCallback(
        options,
        selectedOption,
        onChange,
        -1
    );
    const clickRight = useOnChangeAddIndexCallback(
        options,
        selectedOption,
        onChange,
        1
    );

    return (
        <label className={styles.label} htmlFor={id}>
            <span className={styles.labelText}>{children}</span>
            <div className={styles.stepperWrapper}>
                <button
                    className={styles.chevron}
                    onClick={clickLeft}
                    disabled={options.indexOf(selectedOption) === 0}
                    type="button"
                >
                    <ChevronLeftIcon />
                </button>
                <select
                    onChange={(e) => {
                        const newOption = options.find(
                            (option) => option.id === e.target.value
                        );
                        if (newOption) {
                            onChange(newOption);
                        }
                    }}
                    className={styles.stepper}
                    value={selectedOption.id}
                    id={id}
                    disabled={options.length === 1}
                >
                    {options.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
                <button
                    className={styles.chevron}
                    onClick={clickRight}
                    disabled={
                        options.indexOf(selectedOption) === options.length - 1
                    }
                    type="button"
                >
                    <ChevronRightIcon />
                </button>
            </div>
        </label>
    );
}
