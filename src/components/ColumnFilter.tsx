type ColumnFilterProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const ColumnFilter = ({ label, value, onChange }: ColumnFilterProps) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-1 bg-white p-1 text-sm font-normal text-black"
      />
    </div>
  );
};

export default ColumnFilter;
