import StatusBadge from "./statusBadge";
import "./App.css";

function App() {
  const isOpenToWork = true;
  const goal = "Learning React by building real projects, one component at a time.";

  return (
    <div className="profile-page">
      <h1>Chhay Lyhour</h1>
      <p>{goal}</p>
      <StatusBadge isOpenToWork={isOpenToWork} />
    </div>
  );
}

export default App;