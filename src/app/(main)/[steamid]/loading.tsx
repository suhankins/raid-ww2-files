import LoadingIndicator from '@/components/LoadingIndicator/LoadingIndicator';
import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className={`${styles.loadingContainer} animate-in`}>
            <LoadingIndicator />
        </div>
    );
}
