import React from 'react';
import styles from './Loader.module.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader= () => {
    return (
        <div className={`${styles.loader} flex al-cen j-cen`}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    );
};

export default Loader;