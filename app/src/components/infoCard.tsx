interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

export const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="max-w-sm min-h-96 bg-white rounded-xl shadow-md p-8">
      <div className="text-4xl mb-10">{icon}</div>
      <h2 className="font-bold text-xl mb-3">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};
