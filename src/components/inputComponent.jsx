import React from "react";

const InputComponent = ({
  classLabel,
  classCampo,
  label,
  id,
  type,
  value,
  onChange,
}) => {
  return (
    <>
      <label className={classLabel} htmlFor={id}>
        {label}
      </label>
      <input
        className={classCampo}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

export default InputComponent;
