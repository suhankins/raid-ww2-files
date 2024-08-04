export default function EffectIcon({ negative }: { negative?: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3.5rem"
            height="3.5rem"
            version="1.1"
            style={{
                color: negative ? '#de4a3e' : '#70b35b',
                fill: 'none',
                stroke: 'currentcolor',
                strokeWidth: 6,
            }}
            viewBox="0 0 69.34 69.34"
        >
            <g
                style={{
                    transformOrigin: '50% 50%',
                    rotate: negative ? '180deg' : undefined,
                }}
            >
                <circle cx="34.67" cy="34.67" r="31.35" />
                <polyline points="49.85,35.27 34.55,19.97 19.25,35.27 " />
                <polyline points="49.85,48.81 34.55,33.51 19.25,48.81 " />
            </g>
        </svg>
    );
}
