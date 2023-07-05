import { TapedPicture } from '../TapedPicture/TapedPicture';

export interface PlayerCardProps {
    profileUrl: string;
    personaname: string;
    avatarfull: string;
    tagline: string;
}

export function PlayerCard({
    profileUrl,
    personaname,
    avatarfull,
    tagline,
}: PlayerCardProps) {
    return (
        <div>
            <TapedPicture
                src={avatarfull}
                alt={`${personaname}'s profile picture`}
            />
            <a href={profileUrl}>{personaname}</a>
        </div>
    );
}
