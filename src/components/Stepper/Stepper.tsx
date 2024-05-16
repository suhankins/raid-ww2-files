'use client';

import styles from './Stepper.module.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Stepper({
    options,
    selectedOption,
    onChange,
    id,
    children,
}: {
    options: readonly string[];
    selectedOption: string;
    onChange: (value: string) => void;
    id?: string;
    children: React.ReactNode;
}) {
    return (
        <label className={styles.label} htmlFor={id}>
            <span className={styles.labelText}>{children}</span>
            <div className={styles.stepperWrapper}>
                <button
                    className={styles.chevron}
                    onClick={() => {
                        const newOptionIndex =
                            options.indexOf(selectedOption) - 1;
                        if (newOptionIndex < 0) return;
                        onChange(options[newOptionIndex]);
                    }}
                    disabled={options.indexOf(selectedOption) === 0}
                    type="button"
                >
                    <ChevronLeftIcon />
                </button>
                <select
                    onChange={(e) => onChange(e.target.value)}
                    className={styles.stepper}
                    value={selectedOption}
                    id={id}
                    disabled={options.length === 1}
                >
                    {options.map((option) => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <button
                    className={styles.chevron}
                    onClick={() => {
                        const newOptionIndex =
                            options.indexOf(selectedOption) + 1;
                        if (newOptionIndex >= options.length) return;
                        onChange(options[newOptionIndex]);
                    }}
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
