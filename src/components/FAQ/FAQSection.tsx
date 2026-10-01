import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Lifeway Rehabilitation and Child Development Centre offer?",
    answer: "Lifeway offers physiotherapy, occupational therapy, speech therapy, clinical psychology, special education, neuro rehabilitation, pediatric rehabilitation, autism support, and more.",
  },
  {
    question: "Does Lifeway provide physiotherapy in Perintalmanna?",
    answer: "Yes, Lifeway provides physiotherapy in Perintalmanna for pain, mobility, strength, balance, and physical recovery.",
  },
  {
    question: "Who can benefit from neurorehabilitation?",
    answer: "People recovering from stroke, brain injury, spinal cord injury, and other neurological conditions can benefit from neurorehabilitation.",
  },
  {
    question: "How is the right therapy selected?",
    answer: "The right therapy is selected based on the individual's condition, needs, abilities, and rehabilitation goals.",
  },
  {
    question: "How can I book an appointment at Lifeway?",
    answer: "You can contact Lifeway Rehabilitation and Child Development Centre to schedule an assessment or appointment.",
  },
  {
    question: "Where is the Lifeway Rehabilitation Centre located?",
    answer: "Lifeway Rehabilitation Centre is located in Perintalmanna, Malappuram.",
  },
  {
    question: "Which areas near Perintalmanna can access Lifeway's services?",
    answer: "Lifeway welcomes individuals and families from Perintalmanna and surrounding areas of Malappuram who are looking for professional rehabilitation and therapy services.",
  },
  {
    question: "What conditions can physiotherapy help with?",
    answer: "Physiotherapy can help with pain, injuries, muscle weakness, balance problems, mobility difficulties, post-surgical recovery, and neurological conditions, helping improve strength, movement, flexibility, and everyday function.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="faq">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-[#C6161E] font-semibold uppercase tracking-widest text-sm mb-3 block">
            Have Questions?
          </span>
          <h2 className="heading-lg text-center mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our rehabilitation services, physiotherapy, autism support, and child development center in Malappuram.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
