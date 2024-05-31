import { type IWeapon } from '@/lib/IWeapon';
import styles from './WeaponImage.module.css';

/* eslint-disable @next/next/no-img-element */
export default function WeaponImage({ weapon }: { weapon: IWeapon }) {
    return (
        <div className={styles.weaponImage}>
            <img
                loading="lazy"
                alt=""
                src={`/static/images/raid/weapons/${weapon.id}.png`}
            />
        </div>
    );
}
