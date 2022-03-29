import React from 'react';
import styles from './Page.module.css';

const Page = () => {
    return (
        <div className={`${styles.div} flex-c j-cen al-cen`}>
            <h1 className={`txt-al-cen`}>Error 404 </h1>
            <h1>Page not found</h1>
            
        </div>
    );
};

export default Page;