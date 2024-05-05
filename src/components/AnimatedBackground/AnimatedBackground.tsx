import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
    return (
        <video
            className={styles.animatedBackground}
            autoPlay
            loop
            muted
            playsInline
        >
            <source
                type="video/mp4"
                src="/static/video/raid/raid_anim_bg.mp4"
            ></source>
            <source
                type="video/webm"
                src="/static/video/raid/raid_anim_bg.webm"
            ></source>
        </video>
    );
}
