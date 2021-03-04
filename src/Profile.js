import React, {Component} from 'react';
import './Profile.css';
import {Container, List, ListItem, ListItemText} from "@material-ui/core";
import OutlinedCard from "./work-history/OutlinedCard";

export default class Profile extends Component {
    render() {
        return (
            <Container maxWidth={"sm"}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem alignItems={"flex-start"}>
                        <ListItemText
                            primary={"Summary"}
                        >
                            <React.Fragment>
                                {"hoge"}
                            </React.Fragment>
                        </ListItemText>
                    </ListItem>
                    <ListItem alignItems={"flex-start"}>
                        <ListItemText
                            primary={"Skill"}
                        >
                            <React.Fragment>
                                {"hoge"}
                            </React.Fragment>
                        </ListItemText>
                    </ListItem>
                    <ListItem alignItems={"flex-start"}>
                        <OutlinedCard
                            date={"2017.04-"}
                            position={"System Engineer"}
                            company={"株式会社アイ・ティー・ワン"}
                            url={"https://www.it-one.co.jp/"}
                            skil={"Create Web Service, Java, Linux, AWS, Subversion"}
                        />
                    </ListItem>
                    <ListItem alignItems={"flex-start"}>
                    <OutlinedCard
                            date={"2020.01-"}
                            position={"Web Engineer"}
                            company={"株式会社アップステアーズ"}
                            url={"https://www.upstairs.co.jp/"}
                            skil={"Create Web Application, PHP(Laravel), JavaScript(Vue), AWS, Git"}
                        />
                    </ListItem>
                    <ListItem alignItems={"flex-start"}>
                        <ListItemText
                            primary={"Activity"}
                        >
                            <React.Fragment>
                                {"hoge"}
                            </React.Fragment>
                        </ListItemText>
                    </ListItem>
                </List>
            </Container>
        );
    }
}
