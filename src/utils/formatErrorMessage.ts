const getDefaultResponseErrorMessage = (response: Response) =>
    `server responded ${response.status} (${response.statusText})`;

export function formatErrorMessage(
    prefix: string,
    payload: Response | string
): string {
    const format = (...text: string[]) => `${prefix}: ${text.join('. ')}`;

    if (typeof payload === 'string') {
        return format(payload);
    }

    if (payload.status === 403) {
        return format('profile is not public');
    }
    if (payload.status === 400) {
        return format(
            getDefaultResponseErrorMessage(payload),
            'Are you sure this user owns RAID: World War II?'
        );
    }
    return format(getDefaultResponseErrorMessage(payload));
}
