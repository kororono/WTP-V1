import React from 'react';
// Import your local image
import kenyanFlagImage from '/src/assets/images/Kenyan-flag.webp'; // Adjust path as needed

interface KenyanFlagProps {
  size?: number;
  className?: string;
}

const KenyanFlag: React.FC<KenyanFlagProps> = ({ size = 24, className = '' }) => {
  return (
    <img
      src={kenyanFlagImage}
      alt="Kenyan Flag"
      width={size}
      height={size * 0.67} // Maintain 3:2 aspect ratio
      className={`inline-block object-cover rounded-sm ${className}`}
      style={{
        maxWidth: `${size}px`,
        maxHeight: `${size * 0.67}px`,
        borderRadius: '2px'
      }}
    />
  );
};

export default KenyanFlag;
