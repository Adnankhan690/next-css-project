'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Settings, Menu, Globe, Logs } from 'lucide-react';
import styles from './Sidebar.module.scss';

interface SidebarItem {
  name: string;
  icon?: React.ReactNode;
  path: string;
  subItem?: SidebarItem[];
}

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const currentPath = usePathname();

  const navigationItems: SidebarItem[] = [
    { name: 'Home', icon: <Home size={20} />, path: '/', subItem: [] },
    {
      name: 'Menu', icon: <Logs size={20} />, path: '/menu',
      subItem: [
        { name: 'Icon Bar', path: '/menu/icon-bar' },
        { name: 'Menu Icon', path: '/menu/menu-icon' },
        {name: 'Accordian', path: '/menu/accordian'},
      ],
    },
    { name: 'Images', icon: <User size={20} />, path: '/profile', subItem: [] },
    { name: 'Buttons', icon: <Globe size={20} />, path: '/explore', subItem: [] },
    { name: 'Forms', icon: <Settings size={20} />, path: '/settings', subItem: [] },
    { name: 'Filters', icon: <Settings size={20} />, path: '/settings', subItem: [] },
    { name: 'More', icon: <Settings size={20} />, path: '/settings', subItem: [] },
    { name: 'Grid', icon: <Settings size={20} />, path: '/settings', subItem: [] },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.logo}>NextApp</h2>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          <Menu size={20} />
        </button>
      </div>

      <nav className={styles.navigation}>
        {navigationItems.map((item) => (
          <div key={item.name}>
            <Link
              href={item.path}
              key={item.name}
              className={`${styles.navItem} ${currentPath === item.path ? styles.active : ''}`}
            >
              <div className={styles.navIcon}>{item.icon}</div>
              <span className={styles.navLabel}>{item.name}</span>
            </Link>
            {item.subItem && item?.subItem.map((subItem) => (
              <Link
                href={subItem.path}
                key={subItem.name}
                className={`${styles.subNavItem} ${currentPath === subItem.path ? styles.active : ''}`}
              >
                <span className={styles.subNavLabel}>{subItem.name}</span>
              </Link>
            ))}
          </div>
        ))}
      </nav>

      <div className={styles.userSection}>
        <div className={styles.userAvatar}></div>
        <div className={styles.userInfo}>
          <h3>John Doe</h3>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;