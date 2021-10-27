import { Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image1 from "../../assets/Layer1.png";
import Image2 from "../../assets/Layer2.png";
import Image3 from "../../assets/Layer3.png";
import Image4 from "../../assets/Layer4.png";

const Images = [Image1, Image2, Image3, Image4, Image2, Image1, Image4, Image3];

const useStyles = makeStyles({
  root: {
    padding: "100px 0",
    textAlign: "center",
    backgroundColor: "transparent",
    "& h2": {
      textAlign: "left",
    },
  },
  bottom: {
    marginTop: "100px",
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
          <p>Show al rarity please click herer</p>
          <Button variant="contained">View all</Button>
        </div>
      </Container>
    </section>
  );
};

export default Index;
