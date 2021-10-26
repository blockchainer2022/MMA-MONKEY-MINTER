import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    borderBottom: "2px solid white",
    position: "relative",
  },
  menu: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    display: "flex",
    justifyContent: "end",
    listStyle: "none",
    "& li a": {
      color: "white",
      display: "inline-block",
      textDecoration: "none",
      marginLeft: "20px",
      fontSize: "16px",
    },
  },
  menubar: {
    color: "white",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    marginLeft: "auto",
    display: "block",
    "& svg": {
      fontSize: "30px",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: "50%",
    width: "95%",
    transform: "translateX(-50%)",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "10px",
    maxHeight: "0px",
    overflow: "hidden",
    transition: "all 0.5s",
    "&.active": {
      maxHeight: "500px",
    },
    "& ul": {
      backgroundColor: "white",
      listStyle: "none",
      textALign: "center",
      borderRadius: "10px",
      "& li a": {
        color: "black",
        display: "block",
        textDecoration: "none",
        fontSize: "10px",
        margin: "auto",
        width: "100%",
        textAlign: "center",
        padding: "10px 0",
      },
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
const Index = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Container>
        <ul className={classes.menu}>
          <li>
            <a href="#rarity">Rarity</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#faq">Faq</a>
          </li>
        </ul>
        <button
          className={classes.menubar}
          onClick={() => setOpen((prev) => !prev)}
        >
          <MenuIcon />
        </button>
        <div className={`${classes.mobileMenu} ${open ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#rarity">Rarity</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#faq">Faq</a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Index;
