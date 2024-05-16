export default function useOnChangeAddIndexCallback(
    options: readonly { id: string; name: string }[],
    selectedOption: { id: string; name: string },
    onChange: (value: { id: string; name: string }) => void,
    additive: number
) {
    return () => {
        const newOptionIndex = options.indexOf(selectedOption) + additive;
        if (newOptionIndex < 0) return;
        onChange(options[newOptionIndex]);
    };
}
