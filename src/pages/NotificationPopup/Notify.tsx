import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { TransitionProps } from "@mui/material/transitions";
import Icon from "@mui/material/Icon";

function SlideTransition(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

export default function Notify() {
  const [open, setOpen] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const startTimer = () => {
      timer = setTimeout(() => {
        setLoading(false); // Stop loading after 5 seconds
        handleClose();
      }, 5000); // 5 seconds in milliseconds
    };

    if (open && loading) {
      startTimer();

      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval); // Stop interval once progress reaches 100%
            return 100;
          }
          return prevProgress + 1; // Increase progress by 1 every interval
        });
      }, 44); // Update progress every 50ms

      return () => {
        clearInterval(interval);
        if (timer) {
          clearTimeout(timer);
        }
      };
    }
  }, [open, loading]);

  const handleClose = () => {
    const snackbar = document.querySelector(".MuiSnackbar-root");
    if (snackbar) {
      snackbar.style.transition = "transform 0s ease-in-out";
      snackbar.style.transform = "translateY(1000%)";
    }
    setTimeout(() => {
      setOpen(false);
    }, 5000); // Duration of the transform animation
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      className="bg-white px-5 py-3 rounded-md"
    >
      <div>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          <Icon className="bg-emerald-400 max-w-5 max-h-5 mb-[-3px] mr-0.5 rounded-full" />{" "}
          <b className="font-semibold text-[18px]">Please wait!</b>
          <br />
          <p className="text-[15px] font-medium text-gray-600">
            The Images may take some time to load.
          </p>
          <button
            onClick={handleClose}
            className="absolute font-medium scale-90 top-3 right-3 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-sm py-0 px-2"
          >
            &#x2715;
          </button>
        </Typography>
        {loading && (
          <LinearProgress
            variant="determinate"
            className="rounded-bl-md rounded-br-md"
            value={progress}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "#34d399", // Loading color
              transform: "rotateY(180deg)", // Reverse the progress bar direction
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#a7f3d0", // Bar color
              },
            }}
          />
        )}
      </div>
    </Snackbar>
  );
}
