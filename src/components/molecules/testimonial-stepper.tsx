import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Typography } from "@mui/material";

interface TestimonialStepperProps {
  maxSteps: number;
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
}

export const TestimonialStepper = ({
  maxSteps,
  activeStep,
  handleNext,
  handleBack,
}: TestimonialStepperProps) => {
  return (
    <MobileStepper
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      sx={{ backgroundColor: "transparent" }}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          <Typography component="div" color="secondary">
            Next
          </Typography>
          <KeyboardArrowRight sx={{ color: "white" }} />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft sx={{ color: "white" }} />
          <Typography component="div" color="secondary">
            Back
          </Typography>
        </Button>
      }
    />
  );
};
