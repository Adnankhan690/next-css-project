import React from 'react';
import styles from './profile.module.scss';
import Button from '@/components/Button';
import { User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

export default function Profile () {
  return (
    <div className={styles.profile}>
      <div className={`${styles.header} ${styles.card}`}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}></div>
        </div>
        <h1>John Doe</h1>
        <p className={styles.title}>Software Developer</p>

        <div className={styles.actions}>
          <Button variant="primary">Edit Profile</Button>
          <Button variant="secondary">Settings</Button>
        </div>
      </div>

      <div className={`${styles.details} ${styles.card}`}>
        <h2 className={styles.sectionTitle}>Profile Information</h2>

        <div className={styles.infoGrid}>
          <div className={`${styles.infoItem} ${styles.primary}`}>
            <User className={styles.infoIcon} />
            <div>
              <span className={styles.label}>Full Name</span>
              <p>John Doe</p>
            </div>
          </div>

          <div className={`${styles.infoItem} ${styles.secondary}`}>
            <Mail className={styles.infoIcon} />
            <div>
              <span className={styles.label}>Email</span>
              <p>john.doe@example.com</p>
            </div>
          </div>

          <div className={`${styles.infoItem} ${styles.accent}`}>
            <Phone className={styles.infoIcon} />
            <div>
              <span className={styles.label}>Phone</span>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className={`${styles.infoItem} ${styles.info}`}>
            <MapPin className={styles.infoIcon} />
            <div>
              <span className={styles.label}>Location</span>
              <p>San Francisco, CA</p>
            </div>
          </div>

          <div className={`${styles.infoItem} ${styles.success}`}>
            <Briefcase className={styles.infoIcon} />
            <div>
              <span className={styles.label}>Occupation</span>
              <p>Senior Software Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}