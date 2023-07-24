import { styled } from "styled-components";
import Mail from "../Icons/telegram.svg";
import Twitter from "../Icons/twitter.svg";
import YouTube from "../Icons/youtube.svg";
import FaceBook from "../Icons/facebook-one.svg";
import Instagram from "../Icons/instagram.svg";
import TikTok from "../Icons/tiktok.svg";
interface CompanySocialProps {
  className?: string;
}

const SocialLinks = ({ className }: CompanySocialProps) => {
  return (
    <div className={className}>
      <p>Follow Us</p>
      <table>
        <tr>
          <td>
            <div>
              <img src={Mail} alt="Email" />
            </div>
          </td>
          <td>
            <div>
              <img src={Twitter} alt="Twitter" />
            </div>
          </td>
          <td>
            <div>
              <img src={YouTube} alt="YouTube" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <img src={FaceBook} alt="FaceBook" />
            </div>
          </td>
          <td>
            <div>
              <img src={Instagram} alt="Instagram" />
            </div>
          </td>
          <td>
            <div>
              <img src={TikTok} alt="TikTok" />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

const StyledSocialLinks = styled(SocialLinks)`
  table {
    column-gap: 38px;
  }
  p {
    background: var(
      --primary,
      linear-gradient(135deg, #73e0a9 0%, #5b68df 100%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    font-weight: 500;
    width: 100%;
    margin-top: -5px;
  }
  td {
    padding: 0 19px 19px 19px;
  }
  div {
    width: 45px;
    height: 45px;
    border-radius: 8px;
    background: var(
      --primary,
      linear-gradient(90deg, #73e0a9 0%, #5b68df 100%)
    );
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledSocialLinks;
