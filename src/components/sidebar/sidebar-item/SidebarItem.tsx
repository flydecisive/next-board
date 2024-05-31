import styles from './SidebarItem.module.scss'

import React from "react";

export default function SidebarItem({children}: Readonly<{children: React.ReactNode; }>) {
    return <div className={styles.item}>{children}</div>
}