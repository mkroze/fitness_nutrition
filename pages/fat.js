import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faWeightScale } from "@fortawesome/free-solid-svg-icons";
import GenderToggle from "@/components/genderToggle";
import calculateNutrients from "../utils/nutrientCalculator";
import Menu from "@/components/MenuDisplay";
import Break from "@/components/Break";

export default function Home() {
  const heightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
      className="w-4 text-secondary/70 "
      fill="currentcolor"
    >
      <path d="M0 48C0 21.5 21.5 0 48 0H208c26.5 0 48 21.5 48 48V96H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48z" />
    </svg>
  );
  const candleIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-6 text-secondary/70 "
      fill="currentcolor"
    >
      <path d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z" />
    </svg>
  );
  const scaleIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-6 text-secondary/70 "
      fill="currentcolor"
    >
      <path d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H391.8zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z" />
    </svg>
  );

  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "male",
    activityLevel: "1.2",
    goal: "maintain",
  });

  const handleGenderChange = (newGender) => {
    setFormData({ ...formData, gender: newGender });
  };
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { age, weight, height, gender, activityLevel, goal } = formData;

    try {
      const response = await fetch("/api/suggest-meals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age,
          weight,
          height,
          gender,
          activityLevel,
          goal,
        }),
      });

      const data = await response.json();
      console.log(data);
      setResult(data); // Display the result as JSON for now
    } catch (error) {
      console.error("Error fetching meal suggestions:", error);
      setResult([]);
    }
  };

  return (
    <div>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <section className="relative flex bg-accent rounded-r-xl flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-2/3 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-l text-center">
            <h1 className="font-subtitle text-center text-2xl my-8">
              Calorie Intake Calculator
            </h1>

            <p className="mt-4 text-white font-libre">
              Calculate daily calories based on gender, age, height, and
              activity level.{" "}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-0 mt-8 max-w-xl space-y-4"
          >
            <div>
              <label htmlFor="age" className="sr-only">
                Age
              </label>

              <div className="relative">
                <input
                  className="w-full rounded-lg border-primary bg-base-100 border-2 p-4 pe-12 text-sm shadow-sm font-libre placeholder:text-primary"
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {candleIcon}
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Weight
              </label>

              <div className="relative">
                <input
                  className="w-full rounded-lg border-primary bg-base-100 border-2 p-4 pe-12 text-sm shadow-sm font-libre placeholder:text-primary"
                  type="number"
                  name="weight"
                  placeholder="Weight in kg"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {scaleIcon}
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Height
              </label>

              <div className="relative">
                <input
                  className="w-full rounded-lg border-primary bg-base-100 border-2 p-4 pe-12 text-sm shadow-sm font-libre placeholder:text-neutral"
                  type="number"
                  name="height"
                  placeholder="Height in cm"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {heightIcon}
                </span>
              </div>
            </div>

            <div className="flex gap-8  justify-around">
              <label htmlFor="password" className="sr-only">
                Activity level
              </label>
              <GenderToggle onChange={handleGenderChange} />

              <select
                className="w-1/2 rounded-lg border-primary bg-base-100 border-2 p-4 pe-12 text-sm shadow-sm font-libre"
                name="activityLevel"
                placeholder="Intensity planned"
                value={formData.activityLevel}
                onChange={handleChange}
              >
                <option value="1.2">Sedentary</option>
                <option value="1.375">Lightly active</option>
                <option value="1.55">Moderately active</option>
                <option value="1.725">Very active</option>
                <option value="1.9">Super active</option>
              </select>

              <select
                className="w-1/2  rounded-lg border-primary bg-base-100 border-2 p-4 pe-12 text-sm shadow-sm font-libre"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
              >
                <option value="maintain">Maintain weight</option>
                <option value="lose">Lose weight</option>
                <option value="gain">Gain weight</option>
              </select>
            </div>
            <div className="flex justify-bewtween items-center">
              <button
                className="btn btn-secondary hover:bg-primary "
                type="submit"
              >
                Calculate
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/3">
          <img
            alt=""
            src="https://plus.unsplash.com/premium_photo-1689596509894-f9dbcd4f5de9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8MXwwfHx8MA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover rounded-r-xl"
          />
        </div>
      </section>

      <section>
        {result && (
          
          <Break string="Here are the meal suggestion for a healthy diet."/>
        )}
        <div className="flex flex-col gap-4 m-auto bg-base-100 rounded-md w">
          {result.map((menu) => {
            return <Menu menu={menu} />;
          })}
        </div>
      </section>
    </div>
  );
}
