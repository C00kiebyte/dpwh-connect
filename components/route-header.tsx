type Props = {
  label: string;
};

export default function RouteHeader({ label }: Props) {
  return (
    <div className="sticky top-0 w-full p-5 backdrop-blur-xl z-10">
      <h1 className="text-xl font-bold">{label}</h1>
    </div>
  );
}
