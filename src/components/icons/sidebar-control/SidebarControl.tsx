import styles from './SidebarControl.module.scss';

export default function SidebarControlIcon() {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
        <path d="M6.25 6.25L2.5 10L6.25 13.75" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M13.75 6.25L17.5 10L13.75 13.75" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>
}