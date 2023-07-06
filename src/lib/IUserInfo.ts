export interface IUserInfo {
    personaname: string;
    profileurl: string;
    avatarfull: string;
    /**
     * * 1 = not visible
     * * 3 = visible
     */
    communityvisibilitystate: 1 | 3;
}
