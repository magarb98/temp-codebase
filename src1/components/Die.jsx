import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld === true ? "#59E391" : "white",
    // conditional classes
  };

  const dieFaces = {
    1: <FontAwesomeIcon icon={faDiceOne} />,
    2: <FontAwesomeIcon icon={faDiceTwo} />,
    3: <FontAwesomeIcon icon={faDiceThree} />,
    4: <FontAwesomeIcon icon={faDiceFour} />,
    5: <FontAwesomeIcon icon={faDiceFive} />,
    6: <FontAwesomeIcon icon={faDiceSix} />,
    // if value matches key, return value and render corresponding die
  };

  return (
    <div className='die-face' style={styles} onClick={props.handleClick}>
      <div className='die-num'>{dieFaces[props.value]}</div>
    </div>
  );
}
