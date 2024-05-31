'use client'
// react imports
import {useState} from "react";

import styles from './Sidebar.module.scss';

// components import
import SidebarSlot from './sidebar-slot/SidebarSlot';
import SidebarItem from "@/components/sidebar/sidebar-item/SidebarItem";
import SidebarControlButton from "@/components/UI/buttons/sidebar-control-button/SidebarControlButton";

// icons import
import Logo from "@/components/icons/logo/Logo";
import NotificationsIcon from "@/components/icons/notifications/Notifications";
import SidebarControlIcon from "@/components/icons/sidebar-control/SidebarControl";
import NotesIcon from "@/components/icons/notes/Notes";
import TasksIcon from "@/components/icons/tasks/Tasks";

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return <aside className={isSidebarOpen ? `${styles.sidebar} ${styles['sidebar-active']}` : styles.sidebar}>
        <SidebarSlot>
            <SidebarItem>
                <Logo/> <p>Board</p>
                <SidebarControlButton onClick={() => setIsSidebarOpen((prev) => !prev)}>
                    <SidebarControlIcon/>
                </SidebarControlButton>
            </SidebarItem>
        </SidebarSlot>
        <SidebarSlot>
            <SidebarItem>
                <NotificationsIcon/> <p>Уведомления</p>
            </SidebarItem>
            <SidebarItem>
                <NotesIcon/> <p>Заметки</p>
            </SidebarItem>
            <SidebarItem>
                <TasksIcon/> <p>Задачи</p>
            </SidebarItem>
        </SidebarSlot>
    </aside>
}