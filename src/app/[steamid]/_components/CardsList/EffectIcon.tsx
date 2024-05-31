export default function EffectIcon({ negative }: { negative?: boolean }) {
    return (
        <svg
            style={{
                color: negative ? '#de4a3e' : '#70b35b',
                fill: 'none',
                stroke: 'currentcolor',
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="3.5rem"
            height="3.5rem"
            version="1.1"
            viewBox="0 0 1467.85 1467.85"
        >
            <circle
                style={{
                    strokeWidth: 129.51,
                }}
                cx="733.92"
                cy="733.92"
                r="669.16"
            />
            <line
                style={{
                    strokeWidth: 172.69,
                    display: negative ? 'none' : undefined,
                }}
                x1="733.92"
                y1="1067.16"
                x2="733.92"
                y2="400.68"
            />
            <line
                style={{ strokeWidth: 172.69 }}
                x1="400.68"
                y1="733.92"
                x2="1067.16"
                y2="733.92"
            />
        </svg>
    );
}
