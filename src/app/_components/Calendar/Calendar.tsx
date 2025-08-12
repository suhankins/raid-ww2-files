'use client';
import Stepper from '@/components/Stepper/Stepper';
import { getSeed } from '@/utils/DieselRandom';
import { getDailyJob } from '@/utils/generateDailyJob';
import { useState } from 'react';
import styles from './Calendar.module.css';
import Checkbox from '@/components/Checkbox/Checkbox';
import classNames from 'classnames';
import JobIcon from '@/app/[steamid]/_components/RaidsTable/Row/JobIcon';
import { RarityIcon } from '@/app/[steamid]/_components/CardsList/RarityIcon';
import { type IRarity } from '@/lib/IRarity';
import { renderToString } from 'react-dom/server';
import { CardDescription } from '@/app/[steamid]/_components/CardsList/CardDescription';
import { numberToIsoDate } from '@/utils/numberToIsoDate';
import { BOUNTIES_DB } from '@/utils/BountiesDB';

export const dynamic = 'force-dynamic';

const FIRST_BOUNTY_DATE = new Date(Date.UTC(2025, 5, 26));

type Day =
    | (Partial<ReturnType<typeof getDailyJob>> & {
          day: number;
          date: Date;
          rarity?: IRarity;
          spoiler: boolean;
          dailyExists: boolean;
      })
    | null;

const isSameDay = (a: Date, b: Date) =>
    a.getUTCFullYear() === b.getUTCFullYear() &&
    a.getUTCMonth() === b.getUTCMonth() &&
    a.getUTCDate() === b.getUTCDate();

const isBeforeOrSameDay = (before: Date, current: Date) =>
    before <= current || isSameDay(before, current);

const getWeeks = (
    year: number,
    month: number,
    today: Date,
    spoilersAllowed: boolean
) => {
    const monthStart = new Date(Date.UTC(year, month, 1));
    const monthEnd = new Date(Date.UTC(year, month + 1, 0));
    /**
     * Zero-based
     */
    const startDayOfTheWeek = fromSundayFirstToMondayFirst(
        monthStart.getUTCDay()
    );
    const totalDays = monthEnd.getUTCDate();

    const days: Day[] = [];
    for (let i = 0; i < startDayOfTheWeek; i++) days.push(null);

    for (let i = 0; i < totalDays; i++) {
        const dayDate = new Date(monthStart.setUTCDate(i + 1));
        const dailyExists = !(dayDate < FIRST_BOUNTY_DATE);
        const shouldCensor =
            !spoilersAllowed && !isBeforeOrSameDay(dayDate, today);

        const archivedDaily = BOUNTIES_DB[numberToIsoDate(dayDate)];
        const daily =
            archivedDaily ||
            (dailyExists ? getDailyJob(getSeed(dayDate)) : null);

        days.push({
            day: i + 1,
            date: dayDate,
            rarity: daily?.card?.rarity,
            spoiler: shouldCensor,
            dailyExists,
            ...(shouldCensor ? null : daily),
        });
    }
    const weeks: Day[][] = [];
    let week: Day[] = [];
    while (days.length > 0) {
        while (week.length < 7) {
            week.push(days.shift() || null);
        }
        weeks.push(week);
        week = [];
    }

    return weeks;
};

const fromSundayFirstToMondayFirst = (day: number) => {
    const convertedDay = day - 1;
    return convertedDay > 0 ? convertedDay : 6;
};

const MONTHS = [
    {
        id: 0,
        name: 'January',
    },
    {
        id: 1,
        name: 'February',
    },
    {
        id: 2,
        name: 'March',
    },
    {
        id: 3,
        name: 'April',
    },
    {
        id: 4,
        name: 'May',
    },
    {
        id: 5,
        name: 'June',
    },
    {
        id: 6,
        name: 'July',
    },
    {
        id: 7,
        name: 'August',
    },
    {
        id: 8,
        name: 'September',
    },
    {
        id: 9,
        name: 'October',
    },
    {
        id: 10,
        name: 'November',
    },
    {
        id: 11,
        name: 'December',
    },
];

const getMonthsAllowed = (year: number) => {
    if (year === FIRST_BOUNTY_DATE.getUTCFullYear()) {
        const firstMonth = FIRST_BOUNTY_DATE.getUTCMonth();
        return MONTHS.filter((month) => month.id >= firstMonth);
    }
    return MONTHS;
};

export function Calendar() {
    const today = new Date();
    const [date, setDate] = useState(new Date());
    const [spoilersAllowed, setSpoilers] = useState(false);
    const year = date.getUTCFullYear();
    const months = getMonthsAllowed(year);
    /**
     * Zero-based
     */
    const month = date.getUTCMonth();

    const weeks = getWeeks(year, month, today, spoilersAllowed);

    return (
        <>
            <div className="controls controls-3-columns">
                <Stepper
                    onChange={(option) =>
                        setDate(
                            (currentDate) =>
                                new Date(currentDate.setUTCMonth(option.id))
                        )
                    }
                    options={months}
                    selectedOption={MONTHS[month]}
                >
                    Month
                </Stepper>
                <Stepper
                    onChange={(option) =>
                        setDate((currentDate) => {
                            const date = new Date(
                                currentDate.setUTCFullYear(option.id)
                            );
                            if (
                                date.getUTCFullYear() ===
                                    FIRST_BOUNTY_DATE.getUTCFullYear() &&
                                date.getUTCMonth() <
                                    FIRST_BOUNTY_DATE.getUTCMonth()
                            ) {
                                date.setUTCMonth(
                                    FIRST_BOUNTY_DATE.getUTCMonth()
                                );
                            }
                            return date;
                        })
                    }
                    options={[
                        { id: 2025, name: '2025' },
                        { id: 2026, name: '2026' },
                    ]}
                    selectedOption={{ id: year, name: year.toString() }}
                >
                    Year
                </Stepper>
                <Checkbox checked={spoilersAllowed} onChange={setSpoilers}>
                    Allow spoilers
                </Checkbox>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th scope="col">Mo</th>
                        <th scope="col">Tu</th>
                        <th scope="col">We</th>
                        <th scope="col">Th</th>
                        <th scope="col">Fr</th>
                        <th scope="col">Sa</th>
                        <th scope="col">Su</th>
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, index) => (
                        <tr
                            key={`${spoilersAllowed} ${year} ${month} week ${index}`}
                        >
                            {week.map((day, dayIndex) => (
                                <td
                                    key={`${spoilersAllowed} ${year} ${month} week ${index} day ${dayIndex}`}
                                    className={classNames({
                                        ['selected-corners']:
                                            day?.date &&
                                            isSameDay(day?.date, today),
                                        [styles.current]:
                                            day?.date &&
                                            isSameDay(day?.date, today),
                                        [styles.future]:
                                            day?.date &&
                                            !isBeforeOrSameDay(day.date, today),
                                    })}
                                    data-tooltip-id={
                                        !day ||
                                        ((day.spoiler || !day.card) &&
                                            day.dailyExists)
                                            ? undefined
                                            : 'tooltip'
                                    }
                                    data-tooltip-html={
                                        day?.card
                                            ? renderToString(
                                                  <CardDescription
                                                      name={day.card.name}
                                                      positiveEffect={
                                                          day.card
                                                              .positiveDescription
                                                      }
                                                      negativeEffect={
                                                          day.card
                                                              .negativeDescription
                                                      }
                                                  />
                                              )
                                            : !day?.dailyExists
                                              ? "HQ didn't issue Daily Bounties back then"
                                              : undefined
                                    }
                                >
                                    {day?.day && (
                                        <>
                                            <time
                                                dateTime={`${year}-${month + 1}-${day.day}`}
                                            >
                                                {day.day}
                                            </time>
                                            {day.dailyExists && (
                                                <JobIcon
                                                    id={day.job || 'unknown'}
                                                />
                                            )}
                                            {day.rarity && (
                                                <RarityIcon
                                                    className={
                                                        styles.rarityIcon
                                                    }
                                                    size={24}
                                                    rarity={day.rarity}
                                                />
                                            )}
                                        </>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
