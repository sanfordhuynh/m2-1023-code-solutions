type Props = {
  text: string;
  color: string;
};

export function CustomButton({ text, color }: Props) {
  return (
    <button className="customButton" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
