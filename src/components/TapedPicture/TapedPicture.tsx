/* eslint-disable @next/next/no-img-element */
import styles from './TapedPicture.module.scss';

/**
 * Frame for a picture with two piece of tape
 */
export function TapedPicture({ src, alt }: { src: string; alt: string }) {
    return (
        <div className={styles.frame}>
            <img src={src} alt={alt} />
        </div>
    );
}
