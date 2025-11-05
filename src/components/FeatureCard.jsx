function FeatureCard({ title, description, imgSrc }) {
  return (
    <div className="bg-white px-4 py-4 m-4 max-w-[320px] rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl">
      <img src={imgSrc} alt={title} className="h-40 mx-auto" />
      <h3 className="text-2xl font-semibold mt-4 text-center mb-2">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
