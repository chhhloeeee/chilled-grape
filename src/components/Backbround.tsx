import { styled } from "styled-components";
import BlueSplodge from "./Images/BlueSplodge.svg";
import BlueSplodgeTwo from "./Images/BlueSplodgeTwo.svg";
import BlueSplodgeThree from "./Images/BlueSplodgeThree.svg";
import { motion } from "framer-motion";

interface BackgroundProps {
  className?: string;
}

const Background = ({ className }: BackgroundProps) => {
  return (
    <div className={className}>
      <img src={BlueSplodge} alt="Splodge 1"></img>
      <img src={BlueSplodge} alt="Splodge 2"></img>
      <motion.div
        animate="initial"
        variants={{
          initial: {
            y: [-10, 10],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
        }}
      >
        <img src={BlueSplodgeThree} alt="Splodge 3"></img>
      </motion.div>
      <motion.div
        animate="initial"
        variants={{
          initial: {
            y: [-20, 20],
            x: [-10, 10],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
        }}
      >
        <img src={BlueSplodgeTwo} alt="Splodge 4"></img>
      </motion.div>
      <motion.div
        animate="initial"
        variants={{
          initial: {
            y: [-5, 5],
            x: [-10, 10],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
        }}
      >
        <img src={BlueSplodgeTwo} alt="Splodge 5"></img>
      </motion.div>
    </div>
  );
};

const StyledBackground = styled(Background)`
  div {
    padding: none;
    position: absolute;
  }
  img {
    position: absolute;
    z-index: -1;
  }
  img:nth-of-type(1) {
    transform: rotate(-15deg);
    width: 566.702px;
    height: 450.745px;
    top: -220px;
    left: -70px;
  }
  img:nth-of-type(2) {
    transform: rotate(-140.257deg);
    width: 566.702px;
    height: 516.965px;
    top: 200px;
    right: -220px;
  }
  div:nth-of-type(1) {
    img {
      width: 332.693px;
      height: 258.906px;
      transform: rotate(-5deg);
    }
    top: 370px;
    left: 39.5%;
    z-index: -5;
  }
  div:nth-of-type(2) {
    img {
      width: 427.407px;
      height: 319.137px;
      transform: rotate(10deg);
    }
    top: 670px;
    right: 500px;
    z-index: -5;
  }
  div:nth-of-type(3) {
    img {
      width: 372.814px;
      height: 336.49px;
      transform: rotate(45deg);
    }
    top: 700px;
    left: -100px;
    z-index: -5;
  }
`;
export default StyledBackground;
