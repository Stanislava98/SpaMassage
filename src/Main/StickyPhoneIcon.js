import {styled} from "@mui/material";
import CirclePhone from "../icons/footericon/CirclePhone";
import {useEffect, useState} from "react";
import './StickyButton.css'

const StickyButton = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const footer = document.querySelector('.footer');
      const footerPosition = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(footerPosition > windowHeight);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <button className={`StickyButton ${isVisible ? 'visible' : ''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default StickyButton;
