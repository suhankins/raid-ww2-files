/* eslint-disable @next/next/no-img-element */
import styles from './TapedPicture.module.css';

/**
 * Frame for a picture with two piece of tape
 */
export function TapedPicture({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    return (
        <div className={`${styles.frame} ${className}`}>
            <img
                src="/static/images/raid/tape_0.webp"
                alt=""
                className={`${styles.tape} ${styles.tapeLeft}`}
            />
            <img
                src="/static/images/raid/tape_1.webp"
                alt=""
                className={`${styles.tape} ${styles.tapeRight}`}
            />
            <img src={src} alt={alt} className={styles.photo} />
        </div>
    );
}
