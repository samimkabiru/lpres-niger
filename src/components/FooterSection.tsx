import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import fmafs from '../assets/fmafs-b.webp';
import worldBank from '../assets/world-bank-b.webp';

const FooterSection = () => {
  const date = new Date();
  const FAQS = [
    {
      value: 'item-1',
      question:
        'Is the L-PRES Project compliant with Sustainable Development Goals (SDGs)?',
      answer:
        'Yes. The L-PRES project addresses three major Sustainable Development Goals which include: Zero Hunger (2), Decent Work (8), and taking urgent action against Climate Change (13).',
    },
    {
      value: 'item-2',
      question:
        'Are there plans to include states that did not participate in the selection stage for the L-PRES project?',
      answer:
        'Adhering to the criteria for participation is important. The criteria were well spelled out and established. All the states that met the criteria were selected.',
    },
    {
      value: 'item-3',
      question:
        'How do we know if a state that made provision of Expression of Interest also made provision for counterpart funding?',
      answer:
        'Use established channels including making a full report to your Permanent Secretary and request for such information.',
    },
  ];

  return (
    <div>
      <div className="max-w-[800px] mx-auto px-4">
        <div className="pb-[50px]">
          <h2 className="capitalize font-semibold text-green-800 mb-2 text-3xl sm :text-4xl">
            frequently asked questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {FAQS.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                <AccordionTrigger className="text-lg hover:underline-offset-3 text-green-700 sm:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-[15px] text-gray-600 sm:text-[17px]">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <a
            href="#"
            className="btn btn-outline btn-success mt-3 border-2 text-green-700 border-green-700 hover:text-white hover:bg-green-700"
          >
            see more FAQ'S
          </a>
        </div>
        <div className="flex flex-col items-center pb-[50px]">
          <p className="uppercase tracking-[10px] text-[15px] text-center text-gray-700 mb-5 sm:text-3xl">
            Project Partners
          </p>
          <div className="flex items-center justify-center gap-7">
            <img
              src={worldBank}
              className="w-[30%] sm:w-[40%] md:w-[60%]"
              alt="World bank"
            />
            <img
              className="w-[30%] sm:w-[40%] md:w-[60%]"
              src={fmafs}
              alt="Federal ministry of agriculture and food security."
            />
          </div>
        </div>
      </div>

      <footer className="bg-green-50 rounded-2xl backdrop-blur-md overflow-hidden">
        <div className="max-w-[1140px] mx-auto">
          <div className="footer sm:footer-horizontal text-base-content p-4">
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">FAQ</a>
              <a className="link link-hover">World Bank</a>
              <a className="link link-hover">Ministry of Finance</a>
              <a className="link link-hover">
                Federal Ministry of Agriculture and Rural Development
              </a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Project</a>
              <a className="link link-hover">News</a>
            </nav>
            {/* <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav> */}
            <form>
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="w-80">
                <label>Enter your email address</label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item"
                  />
                  <button className="btn btn-success join-item bg-green-700 border-0 text-white shadow-none hover:bg-green-900">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="footer sm:footer-horizontal items-center justify-center p-4 rounded-2xl md:justify-normal">
            <aside>
              <div className="text-xl font-bold cursor-pointern text-nowrap">
                <span className="text-white bg-green-700 rounded-md p-1">
                  NG
                </span>
                -LPRES
              </div>
            </aside>
            <nav>
              <div className="grid grid-flow-col gap-4 text-green-700">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
          <div className="p-4 mt-3">
            <div className="border-t-2 pt-4 border-gray-400">
              <p className="text-[14px] text-gray-700">
                &copy; {date.getFullYear()} Livestock Productivity & Resilience
                Support Project (L-PRES). All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
