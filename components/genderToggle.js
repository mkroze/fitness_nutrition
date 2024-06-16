import { useState } from "react";
const GenderToggle = ({ onChange }) => {
  const maleIcon = (
    <svg
      className="w-6 text-primary/70 swap-off fill-current w-10 h-10"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
    </svg>
  );
  const femaleIcon = (
    <svg
      className="w-6 text-secondary/70 swap-off fill-current w-10 h-10"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
    </svg>
  );
  const [gender, setGender] = useState("male");
  const toggleGender = () => {
    const newGender = gender === "male" ? "female" : "male";
    setGender(newGender);
    onChange(newGender); // Propagate the change up to the parent component
  };
  return (
    <label className="swap swap-flip">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        checked={gender === "male"} // Check if gender is female
        onChange={toggleGender}
      />

      <div className="swap-on">{maleIcon}</div>
      <div className="swap-off">{femaleIcon}</div>
      {console.log(gender)}
    </label>
  );
};

export default GenderToggle;
