import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import GitHubIcon from '@material-ui/icons/GitHub';
import HotTubIcon from '@material-ui/icons/HotTub';

const useStyles = makeStyles({
    root: {
        minWidth: 400,
        maxWidth: "80%",
        margin: "10% auto 5%",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
    },
});

export default function Menu() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            classes={classes.root}
        >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Github" icon={<GitHubIcon />} href={"https://github.com/yokom5"}/>
            <BottomNavigationAction label="Lancers" icon={<FastfoodIcon />} href={"https://www.lancers.jp/profile/nishi_001?ref=side_menu"}/>
            <BottomNavigationAction label="CrowdWorks" icon={<HotTubIcon />} href={"https://crowdworks.jp/public/employees/1496186?ref=mypage_nav1_account"}/>
        </BottomNavigation>
    );
}
