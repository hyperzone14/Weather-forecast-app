import React from "react";

interface VerticalProgressBarProps {
  progress: number;
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({
  progress,
}) => {
  const adjustedProgress = Math.max(0, Math.min(progress, 100)); // Ensure progress is between 0 and 100
  const dotPosition = `calc(${adjustedProgress}% - ${
    adjustedProgress * 0.15
  }px)`; // Offset by half the dot height to center
  return (
    <>
      <div className="relative h-16 w-6 border-gray-200 border-2 bg-white rounded-full">
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full"
          style={{
            height: "15px", // Height of the dot
            width: "15px", // Width of the dot
            bottom: dotPosition, // Position based on progress
          }}
        />
      </div>
    </>
  );
};

export default VerticalProgressBar;
