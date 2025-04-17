'use client';
import { useState } from "react";
import styles from "./accordian.module.scss";

interface AccordianItems {
  title: string;
  content: string;
  id: number;
  isOpen: boolean;
}

const accordianItems: AccordianItems[] = [
  {
    title: 'Section 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    id: 1,
    isOpen: false,
  },
  {
    title: 'Section 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    id: 2,
    isOpen: false
  },
  {
    title: 'Section 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    id: 3,
    isOpen: false
  }

];


export default function Accordian () {
  const [singleToggleAcc, setSingleToggleAcc] = useState(accordianItems);

  const [multiToggleAcc, setMultiToggleAcc] = useState(accordianItems);

  const toggleSingleAccordian = (item: AccordianItems) => {
    setSingleToggleAcc((prev) => {
      return prev.map((data) => {
        return { ...data, isOpen: data.id === item.id ? !data.isOpen : false };
      });
    });
  };

  const toggleMultipleAccordian = (item: AccordianItems) => {
    setMultiToggleAcc((prev) => {
      return prev.map((data) => {
        return { ...data, isOpen: data.id === item.id ? !data.isOpen : data.isOpen };
      });
    });
  };

  return (
    <div>
      <h1>Accordian</h1>
      <p className={styles.subHeading}>Toggle Single Sections</p>

      <div className={styles.accordianCon}>
        <div>
          {singleToggleAcc.map((item) => {
            return (
              <div onClick={() => toggleSingleAccordian(item)} key={item.id}>
                <div className={`${styles.title} ${item.isOpen ? styles.active : ''}`}>
                  <p>{item.title}</p>
                  {!item.isOpen ? <span>+</span> : <span>-</span>}
                </div>
                {
                  item.isOpen && <p className={styles.content}>{item.content}</p>
                }
              </div>
            );
          })}
        </div>


        <div>
          <p className={styles.multiSubHeading}>Toggle Multiple Sections</p>
          {multiToggleAcc.map((item) => {
            return (
              <div onClick={() => toggleMultipleAccordian(item)} key={item.id}>
                <div className={`${styles.title} ${item.isOpen ? styles.active : ''}`}>
                  <p>{item.title}</p>
                  {!item.isOpen ? <span>+</span> : <span>-</span>}
                </div>
                {
                  item.isOpen && <p className={styles.content}>{item.content}</p>
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}