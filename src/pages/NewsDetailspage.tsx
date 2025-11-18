import NewsCarousel from '@/components/NewsCarousel';

const NewsDetailsPage = () => {
  const date = new Date();
  return (
    <div className="max-w-[1140px] mx-auto px-4 py-12">
      <div className="mb-5">
        <h1 className="text-3xl font-semibold text-green-900 lg:text-4xl mb-3">
          Kogi State Kicks Off the Implementation of Private Veterinary Practice
          Programme (PVP)
        </h1>
        <div className="text-green-900 tracking-wider font-semibold">
          <p className="mb-3">
            {date.toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <div className="mb-2">Lpres event, niger state</div>
        </div>
        <p className="news-details text-gray-600 mb-3 md:columns-2 gap-12">
          In a major step towards improving animal health and farmer
          livelihoods, the Livestock Productivity and Resilience Support Project
          (L-PRES) has launched a National Training of Trainers (ToT) Workshop
          in Abuja for Animal Health Officers from its implementing states. The
          week-long workshop focuses on practical, field level training in key
          areas such as biosecurity, udder health, integrated pest management,
          and general herd health. The goal is to equip officers with hands-on
          knowledge they can pass on to livestock farmers in their states
          ensuring the impact is felt directly at the grassroots. Speaking
          during the opening session, the National Project Coordinator of
          L-PRES, Mr. Sanusi Abubakar, underscored the importance of the
          training. “This is not just another workshop. It's about building
          practical skills that will empower our farmers, improve the health of
          our animals, and strengthen our communities,” he said. Participants
          are already taking part in interactive sessions covering critical
          topics like udder hygiene, milk quality testing, safe milking
          techniques, and farm level biosecurity. These sessions are led by
          experienced facilitators who simplify complex procedures, making them
          easy for farmers to understand and adopt. Mr. Abubakar also
          highlighted the timeliness of the training as the project heads toward
          its Mid-Term Review in November. “The world will be watching. This is
          our chance to demonstrate not just progress in figures, but real
          impact in the lives of farmers,” he noted. The opening session
          featured goodwill messages from key stakeholders, including: Dr. Musa
          Inuwa, Chief Veterinary Officer of Nigeria, Assistant Inspector
          General of Police Aishatu Baju, A representative of the Director
          General, Nigerian Agricultural Services, Mr. Emeka, Representatives
          from the Miyetti Allah Cattle Breeders Association of Nigeria, ECOWAS,
          Nigerian Correctional Service, Dr. Idris Ademoh and Director of FCT
          Veterinary Services. Mr. Abubakar praised the enthusiasm and
          dedication of the participants, facilitators, and the organizing team,
          noting that their efforts are essential to the success of the project
          and the long-term transformation of Nigeria's livestock sector.
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
            Explore other News
          </h2>
          <NewsCarousel />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
