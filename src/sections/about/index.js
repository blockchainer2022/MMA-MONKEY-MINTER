import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    paddingBottom: "50px",
    "& .container": {
      borderTop: "2px solid white",
      padding: "50px 0",
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
    <section className={classes.root} id="about">
      <Container className="container">
        <Container maxWidth="md">
          <h2 className={classes.header}>About</h2>
          <p>Well train monkeys ready to fight....</p>
        </Container>
      </Container>
    </section>
  );
};

export default Index;
