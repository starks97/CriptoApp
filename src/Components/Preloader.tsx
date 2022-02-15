import * as React from 'react';
import { useState } from 'react';
import '../css/preloader.css'

interface LoaderProps {
  preloader: Boolean
  setPreloader: React.Dispatch<React.SetStateAction<Boolean>>
}
function getStylesFromVar(i: number): React.CSSProperties {
  return { '--i': i } as React.CSSProperties
}

function Preloader({ preloader, setPreloader }: LoaderProps) {

  const handdleSubmit = (elem: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    elem.preventDefault();
    elem.currentTarget.classList.add('loading');
    setTimeout(() => {
      setPreloader(true);
    },3000)
  };

  return (
    <div
      className="loader"
      onClick={handdleSubmit}
    >
      <span style={getStylesFromVar(1)}></span>
      <span style={getStylesFromVar(2)}></span>
      <span style={getStylesFromVar(3)}></span>
      <span style={getStylesFromVar(4)}></span>
      <span style={getStylesFromVar(5)}></span>
      <span style={getStylesFromVar(6)}></span>
      <span style={getStylesFromVar(7)}></span>
      <span style={getStylesFromVar(8)}></span>
      <span style={getStylesFromVar(9)}></span>
      <span style={getStylesFromVar(10)}></span>

      <div className="btn">
        <button
          className="btnn"
        >WELCOME
        </button>
      </div>

    </div>
  );
}

export default Preloader