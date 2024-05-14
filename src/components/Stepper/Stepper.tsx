'use client';

import { type Dispatch, type SetStateAction } from 'react';
import styles from './Stepper.module.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Stepper({
    options,
    selectedOption,
    setSelectedOption,
}: {
    options: string[];
    selectedOption: string;
    setSelectedOption: Dispatch<SetStateAction<string>>;
}) {
    return (
        <div className={styles.stepperWrapper}>
            <button
                className={styles.chevron}
                onClick={() =>
                    setSelectedOption((option) => {
                        const newOptionIndex = options.indexOf(option) - 1;
                        if (newOptionIndex < 0) return option;
                        return options[options.indexOf(option) - 1];
                    })
                }
                disabled={options.indexOf(selectedOption) === 0}
            >
                <ChevronLeftIcon />
            </button>
            <select
                onChange={(e) => setSelectedOption(e.target.value)}
                className={styles.stepper}
                defaultValue={selectedOption}
            >
                {options.map((option) => (
                    <option
                        value={option}
                        key={option}
                        selected={option === selectedOption}
                    >
                        {option}
                    </option>
                ))}
            </select>
            <button
                className={styles.chevron}
                onClick={() =>
                    setSelectedOption((option) => {
                        const newOptionIndex = options.indexOf(option) + 1;
                        if (newOptionIndex >= options.length) return option;
                        return options[options.indexOf(option) + 1];
                    })
                }
                disabled={
                    options.indexOf(selectedOption) === options.length - 1
                }
            >
                <ChevronRightIcon />
            </button>
        </div>
    );
}
