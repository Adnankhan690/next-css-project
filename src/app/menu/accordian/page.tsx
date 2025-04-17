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
  const [singleOpenId, setSingleOpenId] = useState<number | null>(null);

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleSingleAccordian = (id: number) => {
    setSingleOpenId((prev) => prev === id ? null : id);
  };

  const toggleMultipleAccordian = (id: number) => {
    setOpenItems((prev) => prev?.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
  };

  return (
    <div>
      <h1>Accordian</h1>
      <p className={styles.subHeading}>Toggle Single Sections</p>

      <div className={styles.accordianCon}>
        <div>
          {accordianItems.map((item) => {
            return (
              <div onClick={() => toggleSingleAccordian(item.id)} key={item.id}>
                <div className={`${styles.title} ${item.isOpen ? styles.active : ''}`}>
                  <p>{item.title}</p>
                  {singleOpenId !== item.id ? <span>+</span> : <span>-</span>}
                </div>
                {
                  singleOpenId === item.id && <p className={styles.content}>{item.content}</p>
                }
              </div>
            );
          })}
        </div>


        <div>
          <p className={styles.multiSubHeading}>Toggle Multiple Sections</p>
          {accordianItems.map((item) => {
            return (
              <div onClick={() => toggleMultipleAccordian(item.id)} key={item.id}>
                <div className={`${styles.title} ${item.isOpen ? styles.active : ''}`}>
                  <p>{item.title}</p>
                  {!openItems.includes(item.id) ? <span>+</span> : <span>-</span>}
                </div>
                {
                  openItems.includes(item.id) && <p className={styles.content}>{item.content}</p>
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}