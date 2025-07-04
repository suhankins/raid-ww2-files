import styles from './FooterContent.module.css';

export default function FooterContent() {
    return (
        <div className={`limited-width ${styles.footer}`}>
            <p>
                This website is not affiliated with Starbreeze, Lion Game Lion,
                or Valve. This website does not collect any data on users and
                doesn&apos;t use cookies. All data presented is collected by
                Valve via Steam.
            </p>
            <p>
                By Punished Bernadetta. Special thanks to HW12Dev for porting
                Diesel RNG algorithm to JavaScript. Contribute on{' '}
                <a href="https://github.com/suhankins/raid-ww2-files">GitHub</a>
                .
            </p>
        </div>
    );
}
