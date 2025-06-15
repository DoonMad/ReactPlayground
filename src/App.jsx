import ProjectCard from './components/ProjectCard';
import { projects } from './projects';

function App() {
  // console.log(projects)
  return (
    <div className="min-h-screen px-6 py-10 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">🚀 React Playground</h1>
        <p className="text-lg text-center mb-10">
          Documenting my React journey through mini-projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
            // <p ke>{project.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
