interface TestimonyCardProps {
  picture: HTMLImageElement;
  alt: string;
  name: string;
  label: string;
  testimony: string;
}

export const TestimonyCard = ({
  picture,
  alt,
  name,
  label,
  testimony,
}: TestimonyCardProps) => {
  return (
    <>
      <div className="max-w-fit min-h-fit bg-white rounded-xl shadow-md p-8 mb-10">
        <div className="flex items-center mb-2">
          <img
            src={picture.toString()}
            alt={alt}
            className="w-16 h-16 rounded-full p-2 object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500 ">{label}</p>
          </div>
        </div>
        <div className="text-gray-700 italic">"{testimony}"</div>
      </div>
    </>
  );
};
