import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getNews } from "../thunk";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import axios from "axios";

export default function NewsApp() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const dispatch = useDispatch();
  const news = useSelector((state) => state.enews.news);
  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div>
      <div style={{ paddingTop: "30px", textAlign: "center" }}>
        <h1>ARTICLES MANIA</h1>
      </div>
      <Container fixed style={{ paddingTop: "50px" }}>
        {news.length > 0
          ? news[0].map((ele, index) => (
              <>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt="Profile Picture"
                        src={ele.multimedia[0].url}
                      />
                    </ListItemAvatar>
                    <Typography sx={{ width: "100%", flexShrink: 0 }}>
                      {ele.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <Item>
                            <img
                              style={{ width: "100%", height: "100%" }}
                              src={ele.multimedia[0].url}
                            />
                          </Item>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Typography>{ele.multimedia[0].caption}</Typography>
                          <br></br>
                          <Typography>SubSection : {ele.subsection}</Typography>
                          <br></br>
                          <Typography>Author : {ele.byline}</Typography>
                          <br></br>
                          <Typography>
                            PublishAt : {ele.published_date}
                          </Typography>
                          <br></br>
                          <Link
                            href={ele.url}
                            underline="hover"
                            target="_blank"
                          >
                            Read full article..
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <CssBaseline />
              </>
            ))
          : ""}

        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation showLabels>
            <BottomNavigationAction
              label="Recents Articles"
              icon={<RestoreIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Container>
    </div>
  );
}
