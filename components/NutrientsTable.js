function NutrientTable({ nutrients }) {
    const { ENERC_KCAL, FAT, CHOCDF, PROCNT, FIBTG } = nutrients;
  
    return (
      <table className="table bg-secondary/50 ">
        <thead>
          <tr>
            <th  className="font-subtitle text-xl text-accent">Nutrient</th>
            <th  className="font-subtitle text-xl text-accent">Quantity</th>
            <th  className="font-subtitle text-xl text-accent">Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-libre text-l text-accent">Energy</td>
            <td className="font-libre text-l text-accent text-center">{ENERC_KCAL.quantity.toFixed(2)}</td>
            <td className="font-libre text-l text-accent text-center">{ENERC_KCAL.unit}</td>
          </tr>
          <tr>
            <td className="font-libre text-l text-accent">Fat</td>
            <td className="font-libre text-l text-accent text-center">{FAT.quantity.toFixed(2)}</td>
            <td className="font-libre text-l text-accent text-center">{FAT.unit}</td>
          </tr>
          <tr>
            <td className="font-libre text-l text-accent">Carbohydrates</td>
            <td className="font-libre text-l text-accent text-center">{CHOCDF.quantity.toFixed(2)}</td>
            <td className="font-libre text-l text-accent text-center">{CHOCDF.unit}</td>
          </tr>
          <tr>
            <td className="font-libre text-l text-accent">Protein</td>
            <td className="font-libre text-l text-accent text-center">{PROCNT.quantity.toFixed(2)}</td>
            <td className="font-libre text-l text-accent text-center">{PROCNT.unit}</td>
          </tr>
          <tr>
            <td className="font-libre text-l text-accent">Fiber</td>
            <td className="font-libre text-l text-accent text-center">{FIBTG.quantity.toFixed(2)}</td>
            <td className="font-libre text-l text-accent text-center">{FIBTG.unit}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  
  export default NutrientTable;
  