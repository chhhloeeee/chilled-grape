import { styled } from "styled-components";

interface CompanySocialProps {
  className?: string;
}

const SocialLinks = ({ className }: CompanySocialProps) => {
  return (
    <div className={className}>
      <table>
        <tr>
          <th>Follow Us</th>
        </tr>
        <tr>
          <td>Email</td>
          <td>Twitter</td>
          <td>YouTube</td>
        </tr>
        <tr>
          <td>Facebook</td>
          <td>Instagram</td>
          <td>TikTok</td>
        </tr>
      </table>
    </div>
  );
};

const StyledSocialLinks = styled(SocialLinks)`
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
`;

export default StyledSocialLinks;
