import Films from "./Films";

const tab = [
  { category: "documents" },
  { category: "Films d'action" },
  { category: "Animés" },
];
//console.log(tab);

const tab1 = tab.map((elem) => {
  return (
    <div>
      <p>CATEGORY: {elem.category}</p>
      <Films />
    </div>
  );
});
//console.log(tab1);

const Category = () => {
  console.log("CATEGORY");
  return (
    <div>
      <h2>{tab1}</h2>
    </div>
  );
};
export default Category;
