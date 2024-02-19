
import React from 'react';
import Addpro from './Addpro';
import { Grid } from '@mui/material';

const Addcrt = ({ category, addToCart }) => {
    
    return (
        <Grid container spacing={3}>
            {category.map((row,pos) => (
                <Grid item key={row.name} xs={12} sm={6} md={4}>
                    <Addpro product={row} addToCart={addToCart} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Addcrt;
