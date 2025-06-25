import React from 'react';
import styled from 'styled-components';

const ComicButton = ({
  children,
  onClick,
  to,
  as = "button",
  className = "",
  showSignature = false,
  ...props
}) => {
  const StyledWrapper = styled.div`
    .comic-button {
      display: inline-block;
      padding: 12px 24px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      color: #fff;
      background-color: #1f2937;
      border: 2px solid #000;
      border-radius: 10px;
      box-shadow: 5px 5px 0px #000;
      transition: all 0.3s ease;
      cursor: pointer;
      font-family: inherit;
      min-width: 200px;
      position: relative;
      z-index: 10;
    }

    .comic-button:hover {
      background-color: #fff;
      color: #1f2937;
      border: 2px solid #1f2937;
      box-shadow: 5px 5px 0px #1f2937;
      transform: translateY(-2px);
    }

    .comic-button:active {
      background-color: #fcf414;
      color: #000;
      box-shadow: none;
      transform: translateY(4px);
    }

    .comic-button.blue {
      background-color: #3b82f6;
    }

    .comic-button.blue:hover {
      background-color: #fff;
      color: #3b82f6;
      border: 2px solid #3b82f6;
      box-shadow: 5px 5px 0px #3b82f6;
    }

    .comic-button.blue:active {
      background-color: #fcf414;
      color: #000;
    }

    .signature {
      margin-top: 20px;
      font-size: 14px;
      color: #6b7280;
      font-style: italic;
      text-align: center;
    }
  `;

  const ButtonComponent = as === "a" ? "a" : "button";
  const buttonProps = as === "a" ? { href: to } : { onClick };

  return (
    <StyledWrapper>
      <ButtonComponent
        className={`comic-button ${className}`}
        {...buttonProps}
        {...props}
      >
        {children}
      </ButtonComponent>
      {showSignature && <div className="signature">by Etienne Gaumery</div>}
    </StyledWrapper>
  );
};

export default ComicButton;
