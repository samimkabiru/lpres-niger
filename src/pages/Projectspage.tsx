import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';

const Projectspage = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-4 py-12">
      <div>
        <h1 className="text-3xl md:text-4xl mb-2 font-semibold text-green-900">
          we finish what we start
        </h1>
        <p className="text-gray-600 mb-6">
          At the heart of the Livestock Productivity and Resilience Enhancement
          Project (L-PRES) are impactful initiatives aimed at bringing about
          positive change in Nigeria's livestock sector. Our diverse range of
          projects reflects our commitment to enhancing productivity,
          resilience, and commercialization across selected value chains.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projectspage;
