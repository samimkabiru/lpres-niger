import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePendingActions } from 'react-icons/md';
import TextSummarizer from './TextSummarizer';
import { Card } from './ui/card';
import type { Project } from '@/data/projects';
import ProjectStatusBadge from './ProjectStatusBadge';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface Props {
  project: Project;
}

const ProjectCard = ({
  project: { image, location, status, title, id },
}: Props) => {
  return (
    <Card className="p-2 overflow-hidden block cursor-pointer group">
      <div className="p-0 overflow-hidden rounded-lg">
        <img
          src={image}
          className="w-full h-full group-hover:transform-[scale(1.3)] transition-transform duration-700"
          alt=""
        />
      </div>
      <div className="text-left py-3 rounded-lg">
        <h2 className="text-[17px] font-semibold">
          <TextSummarizer>{title}</TextSummarizer>
        </h2>
        <div className="flex items-center mt-2">
          <span className="inline-block text-md mr-1 text-green-800">
            <FaLocationDot />
          </span>
          <p>{`${location.city}, ${location.state} state`}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center mt-2">
            <span className="inline-block text-md mr-1 text-green-800">
              <MdOutlinePendingActions />
            </span>
            <ProjectStatusBadge status={status} />
          </div>
          <Link to={`/projects/${id}`}>
            <p className="hover:underline font-semibold text-green-900 flex items-center">
              Learn more{' '}
              <span className="inline-block ml-1">
                <FaArrowRight />
              </span>
            </p>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
