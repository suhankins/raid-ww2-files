import Effect from './Effect';

export function CardDescription({
    name,
    positiveEffect,
    negativeEffect,
}: {
    name: string;
    positiveEffect?: string;
    negativeEffect?: string;
}) {
    return (
        <div>
            <h3>{name}</h3>
            {positiveEffect && <Effect>{positiveEffect}</Effect>}
            {negativeEffect && <Effect negative>{negativeEffect}</Effect>}
        </div>
    );
}
