import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const accordianData = [
  {
    question: "Total supply of MMA monkeys?",
    answer: "There will only be 5000 OG MMA Monkeys. ",
  },
  {
    question: "What is the minting cost?",
    answer: ".5 SOL for all 5000 MMA Monkeys. ",
  },
  {
    question: "Where can i buyor sel MMA monkeys?",
    answer:
      "After mint, a marketplace will be available on DigitalEyes. We will be working on other Marketplaces as well. ",
  },
  {
    question: "will my mma monkeys help me in a street fight?",
    answer:
      "Yes! It will help you fight like Conor Mcgregor (Minus The Leg Break).",
  },
];
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    paddingBottom: "50px",
    "& .container": {
      borderTop: "2px solid white",
      padding: "10px 0",
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
    cursor: "pointer",
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
                  <p className="">{v.answer}</p>
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
