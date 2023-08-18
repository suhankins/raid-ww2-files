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
            <img src={src} alt={alt} />
        </div>
    );
}
