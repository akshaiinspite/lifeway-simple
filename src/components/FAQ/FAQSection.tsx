
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What services does Lifeway provide?",
      answer: "Lifeway offers a comprehensive range of services including occupational therapy, physiotherapy, speech therapy, special education, and clinical psychology for children with developmental needs.",
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment through our website's appointment booking system, by calling our office, or by visiting us in person. Our team will guide you through the process and find the best time slot for you.",
    },
    {
      question: "Do you offer home services?",
      answer: "Yes, we provide home therapy services for families who prefer or require treatment in their home environment. Our therapists can travel to your location within our service area.",
    },
    {
      question: "What age groups do you work with?",
      answer: "We work with children of all ages, from infants to teenagers. Our programs are tailored to meet the specific developmental needs of each age group.",
    },
    {
      question: "Is parent involvement required?",
      answer: "Yes, we strongly encourage parent involvement in the therapy process. We believe that family participation is crucial for the child's progress and provide guidance on how parents can support their child's development at home.",
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
