import { styled } from "styled-components";

interface CompanyLinksProps {
  className?: string;
}

const CompanyLinks = ({ className }: CompanyLinksProps) => {
  return (
    <div className={className}>
      <table>
        <tr>
          <th>Company</th>
        </tr>
        <tr>
          <td>About</td>
        </tr>
        <tr>
          <td>Careers</td>
        </tr>
        <tr>
          <td>Our Work</td>
        </tr>
        <tr>
          <td>Contact</td>
        </tr>
      </table>
    </div>
  );
};

const StyledCompanyLinks = styled(CompanyLinks)`
  th {
    background: var(
      --primary,
      linear-gradient(135deg, #73e0a9 0%, #5b68df 100%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    font-weight: 500;
  }
  td {
    color: #212121;
    text-align: justify;
    font-size: 18px;
    font-weight: 400;
  }
`;

export default StyledCompanyLinks;
