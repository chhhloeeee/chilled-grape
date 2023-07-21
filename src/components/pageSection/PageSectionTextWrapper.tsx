import { styled } from "styled-components";

interface PageSectionTextWrapperProps {
  className?: string;
  title: string;
  content: string;
  bttnText?: string;
}

const PageSectionTextWrapper = ({
  className,
  title,
  content,
  bttnText,
}: PageSectionTextWrapperProps) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{content}</p>
      {bttnText && <button>{bttnText}</button>}
    </div>
  );
};

const StyledPageSectionTextWrapper = styled(PageSectionTextWrapper)`
  max-width: 50%;
  h2 {
    font-size: 36px;
    text-transform: uppercase;
    width: 523px;
  }
  p {
    width: 643px;
    font-size: 24px;
    padding-bottom: 20px;
  }
  button {
    border-radius: 100px;
    background: var(
      --primary,
      linear-gradient(90deg, #73e0a9 0%, #5b68df 100%)
    );
    width: 175px;
    height: 40px;
    flex-shrink: 0;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 600;
  }
`;

export default StyledPageSectionTextWrapper;
