import { Link } from 'react-router-dom';

function ProjectCard({ name, description, slug }) {
  return (
    <Link
      to={`/${slug}`}
      className="block bg-white dark:bg-zinc-800 p-5 rounded-2xl shadow hover:shadow-xl transition duration-200 hover:scale-105"
    >
      <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{name}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </Link>
  );
}

export default ProjectCard;
