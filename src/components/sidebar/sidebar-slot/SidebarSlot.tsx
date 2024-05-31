import React from 'react'

import styles from './SidebarSlot.module.scss'

interface SidebarSlotProps {
    children?: React.ReactNode
}

// обертка для секций сайдбара
export default function SidebarSlot({children}: SidebarSlotProps) {
    return <div className={styles.slot}>{children}</div>
}