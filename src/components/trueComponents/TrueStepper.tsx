import { useState } from "react";
import Modal from "@components/UI/Modal";
import { useTranslation } from "react-i18next";

interface TrueStep {
  image?: string;
  text?: string;
}

const Stepper = () => {
  const { t } = useTranslation();

  const [activeStep, setActiveStep] = useState<number>(0);
  const [assertiveMessage, setAssertiveMessage] = useState("");

  const steps: TrueStep[] = [
    {
      image:
        "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      text: "lorem ipsum dolor fatem si vis pacem para bellum 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
      text: "lorem ipsum dolor fatem si vis pacem para bellum 2",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1666879952402-a53a92b5884f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      text: "lorem ipsum dolor fatem si vis pacem para bellum 3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1682695798256-28a674122872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      text: "lorem ipsum dolor fatem si vis pacem para bellum 4",
    },
  ];

  const handleNext = (array: TrueStep[]) => {
    setAssertiveMessage(`${t("Étape")} ${activeStep + 2} ${t("sur")} 4`);
    const nextStep: number = Math.min(activeStep + 1, array.length - 1);
    setActiveStep(nextStep);
  };

  const handlePrevious = () => {
    setAssertiveMessage(`${t("Étape")} ${activeStep} ${t("sur")} 4`);
    const previousStep: number = Math.max(activeStep - 1, 0);
    setActiveStep(previousStep);
  };

  return (
    <>
      <section className="flex flex-col items-center p-4">
        <div className="md:w-[40rem] bg-transparent rounded-lg">
          <div className="flex flex-col items-center ">
            <div className="mb-4 flex ">
              <img
                src={steps[activeStep].image}
                alt=""
                aria-hidden="true"
                role="presentation"
                className="scale-75 object-cover"
              />
              <div className="flex items-center justify-between p-4">
                <Modal buttonText="✓" modalContent={t("stepper-right")} style="text-black" />
              </div>
            </div>
            <div>
              <p aria-live="polite" role="status">
                {steps[activeStep].text}
              </p>
            </div>
            <Modal
              buttonText="✓"
              modalContent={t("stepper-right")}
              style="md:hidden text -black flex items-center justify-between p-4"
            />
          </div>
          <div className="flex justify-between md:justify-around md:gap-96 md:-mt-[2rem]">
            <button
              aria-label={t("aria-previous")}
              tabIndex={0}
              type="button"
              onClick={() => {
                handlePrevious();
              }}
              className="md:place-self-center  flex items-center buttonClass2 justify-center px-4 py-2 rounded-md hover:-translate-x-1 transform md:transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5l-7 7m0 0l7 7m-7-7h18" />
              </svg>
            </button>
            <button
              aria-label={t("aria-next")}
              tabIndex={0}
              type="button"
              onClick={() => {
                handleNext(steps);
              }}
              className="md:place-self-center  flex items-center buttonClass2 justify-center px-4 py-2 rounded-md hover:translate-x-1 transform md:transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div aria-live="assertive" role="status" className="sr-only">
            {assertiveMessage}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stepper;
