export interface IWeapon {
    id: string;
    name: string;
    type:
        | 'melee'
        | 'grenade'
        | 'primary'
        | 'secondary'
        | 'all'
        | 'turret'
        | 'mine';
    hidden?: boolean;
    category?:
        | 'all'
        | 'smg'
        | 'assault_rifle'
        | 'lmg'
        | 'pistol'
        | 'snp'
        | 'shotgun';
}
