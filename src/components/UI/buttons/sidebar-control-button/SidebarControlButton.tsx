import styles from './SidebarControlButton.module.scss';

import React from "react";

interface SidebarControlButtonProps {
    children: React.ReactNode
    onClick: () => void
}

export default function SidebarControlButton({children, onClick}: SidebarControlButtonProps) {
    return <div className={styles.button} onClick={onClick}>{children}</div>
}