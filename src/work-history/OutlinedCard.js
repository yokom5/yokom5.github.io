import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        fontSize: "x-small"
    },
    root: {
        width: "100%"
    }
});

export default function OutlinedCard(props) {
    const classes = useStyles();

    return (
        <Card variant="outlined" classes={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.date}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.position}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <Link href={props.url} color={"textSecondary"}>
                        {props.company}
                    </Link>
                </Typography>
                <Typography variant="body2" component="p">
                    {props.resume}
                </Typography>
                <Typography variant="body2" component="p">
                    Use: {props.skil}
                </Typography>
            </CardContent>
        </Card>
    );
}
