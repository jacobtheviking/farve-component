import React from 'react';
import {
    Paper,
    Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    root:{
        width: '50%'
    },
    box: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: '180px 60px 60px 180px',
        height: '420px',
        width: '880px'
    }
})

function Workspace(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h1'>Workspace</Typography>
            <div>
                <div className={classes.box}>test</div>
            </div>
        </div>
    );
}

export default Workspace;