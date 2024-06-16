import Link from "next/link";
import NutrientTable from "./NutrientsTable";

const Card = ({ hit, title }) => {
  const { recipe } = hit;
  console.log(hit);
  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g, // This regex matches any word character followed by zero or more non-whitespace characters.
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  return (
    <div className="card w-96 bg-accent shadow-xl">
      {title && (
        <p className="font-libre bg-secondary text-base-100 rounded-md p-2 text-center text-primary">
          {title}
        </p>
      )}
      <figure className="pt-10">
        <img
          src={recipe.image}
          alt="Shoes"
          className="rounded-xl border-2 h-48"
        />
      </figure>
      <div className="card-body items-center text-center">
        <Link href={recipe.url}>
          <h2 className="card-title font-subtitle text-secondary hover:underline hover:text-primary">
            {toTitleCase(recipe.label)}
          </h2>
        </Link>
        {!title && (
          <div className="bg-neutral p-2 rounded-3xl">
            <NutrientTable nutrients={recipe.totalNutrients} />
          </div>
        )}

        <p></p>
      </div>
    </div>
  );
};

export default Card;
