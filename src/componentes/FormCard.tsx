type Props = {
  label: string;
  text: string;
  type: string;
  placeholder: string;
  setState: (props: number) => void;
  state: number;
};

export default function FormCard({
  label,
  text,
  type,
  placeholder,
  setState,
  state,
}: Props) {
  return (
    <div className="w-[35%] p-3 space-y-2">
      <h1 className="text-semibold text-5xl">The Wizard Form ✍🏻</h1>
      <p className="text-xl">{text}</p>
      <p className="text-lg font-semibold">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 outline-none border border-slate-400"
      />
      <div className="flex justify-between">
        {state === 2 || state === 3 ? (
          <button
            className="px-3 py-1 bg-slate-500 text-white font-semibold rounded-md"
            onClick={() => setState(prev => prev - 1)}
          >
            Previous
          </button>
        ) : (
          <br></br>
        )}
        {state === 3 ? (
          <button
            className="px-2 py-1 bg-green-600 text-white font-semibold rounded-md"
          >
            Register
          </button>
        ) : (
          <button
            className="px-2 py-1 bg-blue-600 text-white font-semibold rounded-md"
            onClick={() => setState(prev => prev + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
