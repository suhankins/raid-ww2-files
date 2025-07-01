import classNames from 'classnames';
import LoadingIndicator from './_components/LoadingIndicator/LoadingIndicator';
import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className={classNames(styles.loadingContainer, 'animate-in')}>
            <LoadingIndicator />
        </div>
    );
}
