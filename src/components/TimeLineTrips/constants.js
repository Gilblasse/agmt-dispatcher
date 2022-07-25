import styles from './styles.module.scss';

export const statusText = {
    completed: 'Completed',
    inRoute: 'In Route',
    inTrans: 'In Transition',
    wating: 'Waiting',
    canceled: 'Canceled',
    default: '',
}

export const statusIndicatorClass = {
    completed: styles.completed,
    statusActive: styles.statusActive,
    inRoute: styles.statusInRoute,
    inTrans: styles.statusInTrans,
    wating: styles.statusWating,
    default: "",
    canceled: ""
}