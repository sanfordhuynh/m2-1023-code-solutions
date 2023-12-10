import { CustomButton } from './CustomButton';

function App() {
  const handleCustomClick = (text: string) => {
    alert(`Button clicked: ${text}`);
  };

  return (
    <div className="App">
      <CustomButton
        text="First Button"
        color="red"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Second Button"
        color="lightgreen"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Third Button"
        color="lightblue"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
