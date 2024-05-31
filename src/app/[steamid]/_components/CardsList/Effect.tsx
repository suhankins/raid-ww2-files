import EffectIcon from './EffectIcon';
import styles from './Effect.module.css';

export default function Effect({
    negative,
    children,
}: {
    children: React.ReactNode;
    negative?: boolean;
}) {
    return (
        <div className={styles.effectContainer}>
            <EffectIcon negative={negative} />
            <span>{children}</span>
        </div>
    );
}
