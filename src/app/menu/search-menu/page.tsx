'use client';
import { useState } from 'react';
import styles from './searchMenu.module.scss';
const searchMenuData = [
  {
    id: 1,
    label: 'HTML',
    value: 'html',
  },
  {
    id: 2,
    label: 'CSS',
    value: 'css',
  },
  {
    id: 3,
    label: 'JavaScript',
    value: 'javascript',
  },
  {
    id: 4,
    label: 'React',
    value: 'react',
  },
  {
    id: 5,
    label: 'Next.js',
    value: 'nextjs',
  },
  {
    id: 6,
    label: 'Node.js',
    value: 'nodejs',
  },
  {
    id: 7,
    label: 'Express.js',
    value: 'expressjs',
  },
  {
    id: 8,
    label: 'MongoDB',
    value: 'mongodb',
  },
  {
    id: 9,
    label: 'MySQL',
    value: 'mysql',
  },
];

export default function SearchMenu () {

  const [menuData, setMenuData] = useState(searchMenuData);

  const handleMenuSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredMenuData = searchMenuData.filter((item) => {
      return item.value.toLowerCase().includes(searchValue);
    });
    setMenuData(filteredMenuData);

  };

  return (
    <div>
      <h1>Search Menu</h1>
      <div className={styles.mainCon}>
        <div className={styles.searchMenu}>
          <h2>Menu</h2>
          <input onChange={(event) => { handleMenuSearch(event); }} type="text" placeholder='Search...' />
          <div className={styles.menuList}>
            {menuData.map((item) => {
              return (
                <div key={item.id} className={styles.menuItem}>
                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.content}>
          <h2>
            Page Content
          </h2>
          <p className={styles.contentText}>
            Start to type for a specific category/link inside the search bar to filter the search options.

            Some text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..

            Some other text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..

            Some text..
          </p>

        </div>
      </div>
    </div>
  );
}