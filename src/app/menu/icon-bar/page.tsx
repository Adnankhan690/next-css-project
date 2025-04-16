'use client';
import React from 'react';
import styles from './icon-bar.module.scss';
import { Delete, Globe, House, Mail, Search } from 'lucide-react';

export default function IconBar () {
  const actions = [
    { name: 'House', icon: <House />, isActive: true },
    { name: 'Search', icon: <Search />, isActive: false },
    { name: 'Mail', icon: <Mail />, isActive: false },
    { name: 'Globe', icon: <Globe />, isActive: false },
    { name: 'Delete', icon: <Delete />, isActive: false },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.actions}>
        {actions.map((action) => (
          <div
            key={action.name}
            className={`${styles.action} ${action.isActive && `${styles.active}`}   `}
          >
            <div className={`${styles.icon} `}>
              {action.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

