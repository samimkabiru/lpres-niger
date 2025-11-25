import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import fmafs from '../assets/fmafs-b.webp';
import worldBank from '../assets/world-bank-b.webp';
import { Link } from 'react-router-dom';

const FAQSpage = () => {
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
      <div className="max-w-[800px] mx-auto py-12 px-4">
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
    </div>
  );
};

export default FAQSpage;
