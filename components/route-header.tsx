type Props = {
  label: string;
};

export default function RouteHeader({ label }: Props) {
  return (
    <div className="p-5 absolute top-0 w-full">
      <h1 className="text-xl font-bold backdrop-blur-xl">{label}</h1>
    </div>
  );
}
