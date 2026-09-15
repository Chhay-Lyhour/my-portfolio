import StatusBadge from "./statusBadge";
import ProjectCard from "./components/ProjectCard";
import Section from "./components/Section";
import "./App.css";

function App() {
  const isOpenToWork = false;
  const goal = "Learning React by building real projects, one component at a time.";

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold text-gray-900">Chhay Lyhour</h1>
      <p className="mt-2 text-gray-700">{goal}</p>
      <div className="mt-4">
        <StatusBadge isOpenToWork={isOpenToWork} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <main className="md:col-span-2">
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ProjectCard
              title="Portfolio Site"
              status="Live"
              description="This React + Tailwind portfolio, deployed and iterating."
              url="https://github.com/Chhay-Lyhour/my-portfolio"
            />
            <ProjectCard
              title="Photo Wiper"
              status="In progress"
              description="A small mobile app for managing your photos and storage."
              url="https://github.com/Chhay-Lyhour/PhotoWiper"
            />
          </div>

        </main>

        <aside className="md:col-span-1">
          <Section title="Skills">
            <ul className="space-y-2 text-gray-700">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
            </ul>
            <a
              href="https://github.com/Chhay-Lyhour"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-indigo-600 transition-colors hover:text-indigo-800"
            >
              View my GitHub →
            </a>
          </Section>
        </aside>
      </div>
    </div>
  );
}

export default App;
