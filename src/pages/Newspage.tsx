import NewsCard from '@/components/NewsCard';
import news from '@/data/news';
import { Link } from 'react-router-dom';

const Newspage = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-4 py-12">
      <h1 className="text-3xl text-green-900 font-semibold mb-3 lg:text-4xl">
        Latest News from L-PRES
      </h1>
      <p className="text-gray-600">
        Stay abreast of the Livestock Productivity and Resilience Enhancement
        Project (L-PRES) through our News and Updates section. Keep informed
        about the project's latest milestones, achievements, and insights,
        offering you a deeper understanding of the L-PRES initiative.
      </p>

      <div className="grid gap-5 lg:grid-cols-3 mt-10">
        {news.map((news) => (
          <Link to={`/news/${news.id}`} key={news.id}>
            <NewsCard news={news} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Newspage;
