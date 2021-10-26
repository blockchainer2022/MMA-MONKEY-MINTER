import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const accordianData = [
  {
    question: "Total supply of MMA monkeys?",
    answer: "Jaw Breakers will be listed at .08 to mint. ",
  },
  {
    question: "What is the minting cost?",
    answer:
      "You will be able to mint a Jaw Breakers on release, after that you can purchase one on our opensea page. ",
  },
  {
    question: "Where can i buyor sel MMA monkeys?",
    answer: "After 24 hours your Jaw Breakers will reveal itself. ",
  },
  {
    question: "will my mma monkeys help me in a street fight?",
    answer: "There will be 10,000 Jaw Breakers. ",
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
  },
  header: {
    fontSize: 18,
    marginBottom: 50,
  },
  accrodian: {
    textAlign: "center",
    color: "black",
    marginTop: 20,
    "& p": {
      color: "white",
    },
  },
  item: {
    backgroundColor: "white",
    padding: "10px 0",
    borderRadius: "10px",
  },
  show: {
    padding: "10px 0 0 0",
  },
  hidden: {
    overflow: "hidden",
    maxHeight: 0,
    height: 0,
  },
});

const Index = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState();

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section className={classes.root} id="faq">
      <Container className="container">
        <Container maxWidth="md">
          <h2 className={classes.header}>FAQ</h2>
          <div className="">
            {accordianData.map((v, i) => (
              <div key={i} className={classes.accrodian}>
                <div className={classes.item} onClick={() => toggle(i)}>
                  <h3 style={{ userSelect: "none" }}>{v.question}</h3>
                </div>
                <div
                  className={` ${
                    clicked === i ? classes.show : classes.hidden
                  }`}
                >
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi aut vero velit amet, eius veniam soluta aliquid error
                    autem eum.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default Index;
