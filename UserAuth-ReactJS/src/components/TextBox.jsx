import React from "react";

const TextBox = (props) => {
  return (
    <div
      className={`flex justify-center items-center ${props.width} ${props.div}`}
    >
      <label className={`relative cursor-text ${props.width}`}>
        <input
          type={props.type}
          placeholder={props.hint}
          value={props.value}
          onChange={(e) => props.setState(e.target.value)}
          className={`${props.input} ${props.height} ${props.width} ${props.text} ${props.backgroundColor} ${props.border} rounded-lg border-opacity-50 outline-none focus:border-[#2E0052] placeholder-gray-300 placeholder-opacity-0 transition duration-200`}
        />
        <span
          className={`${props.span} ${props.text} cursor-text text-opacity-80 ${props.backgroundColor} absolute left-5 ${props.position} transition duration-200 input-text`}
        >
          {props.hint}
        </span>
      </label>
    </div>
  );
};

export default TextBox;
