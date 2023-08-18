import { TapedPicture } from '../TapedPicture/TapedPicture';

export interface PlayerCardProps {
    profileurl: string;
    personaname: string;
    avatarfull: string;
    tagline: string;
}

export function PlayerCard({
    profileurl,
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
            <a href={profileurl}>
                {tagline} {personaname}
            </a>
        </div>
    );
}
