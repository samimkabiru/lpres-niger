import ProjectsCarousel from '@/components/ProjectsCarousel';
import ProjectStatusBadge from '@/components/ProjectStatusBadge';

const ProjectsDetailspage = () => {
  return (
    <div className="max-w-[1024px] mx-auto px-4 py-12">
      <div className="mb-5">
        <h1 className="text-3xl font-semibold text-green-900 lg:text-4xl mb-3">
          Kogi State Kicks Off the Implementation of Private Veterinary Practice
          Programme (PVP)
        </h1>
        <div className="mb-3">
          <ProjectStatusBadge status="completed" />
        </div>
        <p className="text-gray-600 mb-3">
          Kogi State Kicks Off the Implementation of Private Veterinary Practice
          Programme (PVP) Under L-PRES Performance Based Condition Financing
          Arrangement.
        </p>
      </div>
      <div className="grid gap-10 items-center md:grid-cols-[1fr_300px]">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
              alt=""
            />
          </div>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-5">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-green-900 font-semibold text-[27px] text-3xl mb-5">
            Explore other projects
          </h2>
          <ProjectsCarousel orientation="vertical" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetailspage;
