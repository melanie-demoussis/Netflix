import Category from "./Category";
import Films from "./Films";
import data from "../components/data.json";
const Section = () => {
  console.log("section films");
  return (
    <section>
      <Category />
      <Films />
    </section>
  );
};
export default Section;
