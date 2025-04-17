'use client';
import { useState } from "react";
import styles from "./Tab.module.scss";

const tabItems = [
  { id: 1, title: 'London', content: 'London is the capital city of England.' },
  { id: 2, title: 'Paris', content: 'Paris is the capital of France.' },
  { id: 3, title: 'Tokyo', content: 'Tokyo is the capital of Japan.' },
];

export default function Tab () {
  const [openTab, setOpenTab] = useState(tabItems[0].id);


  const handleToggleTab = (id: number) => {
    setOpenTab(id);
  };

  return (
    <div className={styles.mainCon}>
      <div className={styles.tabMainCon}>
        {
          tabItems.map((tab) => {
            return (
              <div onClick={() => handleToggleTab(tab.id)}
                className={`${styles.tabTitle} ${tab.id === openTab ? styles.active : ''}`}
                key={tab.id}
              >
                <p>{tab.title}</p>
              </div>
            );
          })
        }
      </div>
      <div className={styles.contentCon}>
        {
          tabItems.map((tab) => {
            return (
              <div key={tab.id}>
                {openTab === tab.id &&
                  <div className={styles.tabContent}>
                    <p>{tab.content}</p>
                  </div>
                }
              </div>
            );
          })
        }
      </div>
    </div>
  );
}