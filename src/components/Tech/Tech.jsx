import "./Tech.css";

const Tech = () => {
  const reactTerms = [
    "React⚛",
    "Components🧩",
    "State📦",
    "Props🎣",
    "Render🎨",
    "Lifecycle Methods🔁",
    "Virtual DOM🌐",
    "JSX🔮",
    "Hook",
  ];

  return (
    <ul className="Tech">
      {reactTerms.map((term) => (
        <li key={term}>{term}</li>
      ))}
    </ul>
  );
};

export default Tech;