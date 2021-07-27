import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import Greeting from "./Greeting";
import NumSign from "./NumSign";

import "./index.css";


function SuperLemon(props) {
  const [number, setNumber] = useState(0);
  const [squaredNum, setSquaredNum] = useState(0);
  useEffect(() => {
    setSquaredNum(number * number);
  }, [number]);
  return (
    <div className="nonsense">
      <Greeting name={props.name} />
      <Message />
      <div>
        <NumSign number={number} capture="number" />
        <NumSign number={squaredNum} capture="squared" />
      </div>
      <div
        className="button"
        raised={true}
        onClick={() => setNumber(number - 1)}
      >
        -
      </div>
      <div
        className="button"
        raised={true}
        onClick={() => setNumber(number + 1)}
      >
        +
      </div>
    </div>
  );
}

SuperLemon.propTypes = {
  name: PropTypes.string
};

export default SuperLemon;