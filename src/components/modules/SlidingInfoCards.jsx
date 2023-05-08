export default function SlidingInfoCards({ module }) {
  console.log(module);
  return (
    <div className="w-full h-screen relative">
      <h1>{module?.title}</h1>
      <div className="flex">
        {module?.cards.map((card, i) => (
          <div key={i} className="">
            <img src={card.image.url} alt="" className="rounded-sm" />
            <div>
              <h2>{card.title}</h2>
              <h3>{card.subtitle}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}