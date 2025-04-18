'use client';
import { useState } from "react";
import styles from "./TabHeaders.module.scss";

const tabHeadersData = [
  { id: 1, title: 'London', content: 'London is the capital city of England.', color: '#FF0000' },
  { id: 2, title: 'Paris', content: 'Paris is the capital of France.', color: '#00FF00' },
  { id: 3, title: 'Tokyo', content: 'Tokyo is the capital of Japan.', color: '#0000FF' },
  { id: 4, title: 'Oslo', content: 'Oslo is the capital of Norway.', color: '#FFFF00' },
];

const tabHeadersMaper = {
  [tabHeadersData[0].id]: 'First',
  [tabHeadersData[1].id]: 'Second',
  [tabHeadersData[2].id]: 'Third',
  [tabHeadersData[3].id]: 'Fourth',
};

export default function TabHeadersComp () {
  const [openId, setOpenId] = useState(1);

  const handleToggleTab = (id: number) => {
    setOpenId(id);
  };

  return (
    <div className={styles.mainCon}>
      <div className={`${styles.switchedTab} ${styles[`switchedTab${tabHeadersMaper[openId]}`]}`}>
        {tabHeadersData.map((tab) => {
          return (
            <div key={tab.id}>
              {openId === tab.id &&
                <div className={styles.textCon}>
                  <p className={styles[`tabTitle${tabHeadersMaper[openId]}`]}>{tab.title}</p>
                  <p>{tab.content}</p>
                </div>
              }
            </div>
          );
        })}
      </div>

      <div className={styles.tabBtnCon}>
        {tabHeadersData.map((tab) => {
          const isActive = tab.id === openId;
          const tabClass = `tab${tabHeadersMaper[tab.id]}`;
          return (
            <div
              onClick={() => handleToggleTab(tab.id)}
              className={`
                ${styles.tabWithTitle} 
                ${styles[tabClass]}
                ${isActive ? styles.activeTab : ''}
              `}
              key={tab.id}
            >
              <p>{tab.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}