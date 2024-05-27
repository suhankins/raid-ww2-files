import styles from './LoadingIndicator.module.css';

export default function LoadingIndicator() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96px"
            height="132px"
            version="1.1"
            viewBox="-20 0 400 486.76"
            className={styles.loadingIndicator}
            aria-label="Loading..."
        >
            <g className={styles.drumContainer}>
                <path
                    className={styles.drum}
                    d="M247.72 171.2c32.95,-13.1 71.38,-0.41 89.64,31.21 18.25,31.61 10.03,71.25 -17.79,93.23 6.98,5.53 13.06,12.44 17.79,20.63 20.05,34.73 8.15,79.15 -26.58,99.2 -19.98,11.54 -43.17,12.49 -63.07,4.62 -3.14,21.18 -15.56,40.77 -35.54,52.31 -34.73,20.05 -79.15,8.15 -99.2,-26.58 -4.73,-8.18 -7.68,-16.91 -8.97,-25.72 -32.95,13.1 -71.38,0.4 -89.64,-31.21 -18.25,-31.62 -10.03,-71.25 17.79,-93.23 -6.99,-5.53 -13.06,-12.45 -17.79,-20.63 -20.05,-34.74 -8.15,-79.15 26.58,-99.2 19.98,-11.54 43.17,-12.5 63.07,-4.62 3.14,-21.18 15.56,-40.78 35.54,-52.31 34.73,-20.06 79.15,-8.16 99.2,26.58 4.73,8.18 7.68,16.9 8.97,25.72z"
                />
                <circle
                    transform="matrix(0.818147 -0.472357 0.472357 0.818147 77.2532 352.578)"
                    r="41.72"
                />
                <circle
                    transform="matrix(0.818147 -0.472357 0.472357 0.818147 77.2532 238.717)"
                    r="41.72"
                />
                <circle
                    data-test="right-top"
                    transform="matrix(0.818147 -0.472357 0.472357 0.818147 274.466 238.717)"
                    r="41.72"
                />
                <circle
                    data-test="right-bottom"
                    transform="matrix(0.818147 -0.472357 0.472357 0.818147 274.466 352.578)"
                    r="41.72"
                />
                <circle
                    data-test="pin"
                    transform="matrix(0.590975 -0.3412 0.3412 0.590975 175.86 295.648)"
                    r="41.72"
                />
                <circle
                    data-test="bottom"
                    transform="matrix(0.818147 -0.472357 0.472357 0.818147 175.86 409.509)"
                    r="41.72"
                />
                <circle
                    className={styles.topRightBullet}
                    transform="matrix(0.818147 -0.472357 0.472357 0.818147 175.86 181.787)"
                    r="41.72"
                />
            </g>
            <g className={styles.topBullet}>
                <circle
                    transform="matrix(0.818147 -0.472357 0.472357 0.818147 175.86 181.787)"
                    r="41.72"
                />
            </g>
        </svg>
    );
}
