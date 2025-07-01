import { type Option } from './Stepper';

export default function useOnChangeAddIndexCallback<T extends string | number>(
    options: readonly Option<T>[],
    selectedOption: Option<T>,
    onChange: (value: Option<T>) => void,
    additive: number
) {
    return () => {
        const newOptionIndex =
            options.findIndex((option) => option.id === selectedOption.id) +
            additive;
        if (newOptionIndex < 0) return;
        onChange(options[newOptionIndex]);
    };
}
