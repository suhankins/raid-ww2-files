'use client';

import styles from './Tooltip.module.css';
import { Tooltip } from 'react-tooltip';

export default function CustomTooltip() {
    return (
        <Tooltip
            id="tooltip"
            openEvents={{
                mouseenter: true,
                focus: true,
                click: true,
            }}
            className={styles.customTooltip}
        />
    );
}
