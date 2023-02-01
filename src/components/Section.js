const Section = ({ elem }) => {
  return (
    <section>
      <h2>{elem.category}</h2>
      <div className="images-container">
        {elem.images.map((img, num) => {
          console.log(img);
          return <img className="size" key={num} src={img} alt="film " />;
        })}
      </div>
    </section>
  );
};

export default Section;
