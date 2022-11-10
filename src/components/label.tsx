import React from 'react';
import './label.css';

interface LabelProps {
  
  /**
   * Button contents
   */
  label: string;
  
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({
  label,
  ...props
}: LabelProps) => {
  return (
    <label
      {...props}
    >
      {label}
    </label>
  );
};
