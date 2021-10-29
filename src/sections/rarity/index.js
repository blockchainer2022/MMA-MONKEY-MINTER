import { Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image1 from "../../assets/1.png";
import Image2 from "../../assets/2.png";
import Image3 from "../../assets/3.png";
import Image4 from "../../assets/4.png";
import Image5 from "../../assets/5.png";
import Image6 from "../../assets/6.png";
import Image7 from "../../assets/7.png";
import Image8 from "../../assets/8.png";

const Images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const useStyles = makeStyles({
  root: {
    padding: "0 0 50px 0",
    textAlign: "center",
    backgroundColor: "transparent",
    "& h2": {
      textAlign: "left",
    },
  },
  bottom: {
    marginTop: "30px",
    "& h3": {
      fontSize: "16px",
    },
    "& .MuiButton-contained": {
      fontFamily: "m42_Font",
      fontSize: "12px",
      marginTop: "20px",
    },
  },
});

const Index = () => {
  const classes = useStyles();
  return (
    <section className={classes.root} id="rarity">
      <Container maxWidth="md">
        <h2>SNEAK PICS</h2>
        <Grid container spacing={2}>
          {Images.map((v, i) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={i}>
              <img src={v} alt="" style={{ width: "100%" }} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.bottom}>
          <h3>All Rarity</h3>
          <p>To Show All Rarity Please Click Here</p>
          <Button variant="contained">View all</Button>
        </div>
      </Container>
    </section>
  );
};

export default Index;
