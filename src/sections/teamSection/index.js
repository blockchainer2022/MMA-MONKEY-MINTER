import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image1 from "../../assets/1.png";
import Image2 from "../../assets/2.png";
import Image3 from "../../assets/3.png";
import Image4 from "../../assets/4.png";

const data = [
  {
    image: Image1,
    title: "Monkey mcgregor",
    role: "Co-founder",
    dep: "(Management)",
  },
  {
    image: Image2,
    title: "Ape Diaz",
    role: "Co-founder",
    dep: "(tech)",
  },
  {
    image: Image3,
    title: "Chimp sonnen",
    role: "Co-founder",
    dep: "(Arts)",
  },
  {
    image: Image4,
    title: "Gorilla mane",
    role: "",
    dep: "(Comedic Relief)",
  },
];

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    paddingBottom: "50px",
    "& .container": {
      borderTop: "2px solid white",
      padding: "50px 0",
    },
    "& h5": {
      fontSize: 10,
    },
    "& p": {
      fontSize: 10,
    },
    "& span": {
      fontSize: 8,
    },
  },
  header: {
    fontSize: 18,
    marginBottom: 50,
  },
});

const Index = () => {
  const classes = useStyles();
  return (
    <section className={classes.root} id="team">
      <Container className="container">
        <Container maxWidth="md">
          <h2 className={classes.header}>Team Member</h2>
          <Grid container spacing={2}>
            {data.map((v, i) => (
              <Grid item xs={12} sm={6} md={3} lg={3} key={i}>
                <img src={v.image} alt="" style={{ width: "100%" }} />
                <h5>{v.title}</h5>
                <p>{v.role}</p>
                <span>{v.dep}</span>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </section>
  );
};

export default Index;
