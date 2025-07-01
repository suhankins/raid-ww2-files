'use client';

import styles from './Stepper.module.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import useOnChangeAddIndexCallback from './useOnChangeCallback';
import { useId } from 'react';

export interface Option<T extends string | number> {
    id: T;
    name: string;
}

export default function Stepper<T extends string | number>({
    options,
    selectedOption,
    onChange,
    children,
}: {
    options: readonly Option<T>[];
    selectedOption: Option<T>;
    onChange: (value: Option<T>) => void;
    children: React.ReactNode;
}) {
    const inputId = useId();
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
        <label className={styles.label} htmlFor={inputId}>
            <span className={styles.labelText}>{children}</span>
            <div className={styles.stepperWrapper}>
                <button
                    className={styles.chevron}
                    onClick={clickLeft}
                    disabled={
                        options.findIndex(
                            (option) => option.id === selectedOption.id
                        ) === 0
                    }
                    type="button"
                    aria-label="previous option"
                >
                    <ChevronLeftIcon />
                </button>
                <select
                    onChange={(e) => {
                        const newOption = options.find(
                            (option) => option.id.toString() === e.target.value
                        );
                        if (newOption) {
                            onChange(newOption);
                        }
                    }}
                    className={styles.stepper}
                    value={selectedOption.id}
                    id={inputId}
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
                        options.findIndex(
                            (option) => option.id === selectedOption.id
                        ) ===
                        options.length - 1
                    }
                    type="button"
                    aria-label="next option"
                >
                    <ChevronRightIcon />
                </button>
            </div>
        </label>
    );
}
