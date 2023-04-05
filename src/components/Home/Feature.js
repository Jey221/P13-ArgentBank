import iconChat from '../../assets/icon-chat.png';
import iconMoney from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';

/**
 * The function returns a set of features with icons, titles, and descriptions for a financial service.
 * @returns A React functional component called "Feature" is being returned. It renders a div with
 * class name "features" and three child divs with class name "feature-item". Each child div contains
 * an image, a heading, and a paragraph. The images are sourced from three different icons, and the
 * headings and paragraphs contain text related to the features of the product being advertised.
 */
function Feature() {
  return (
    <div className="features">
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={iconChat} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className="feature-item">
        <img src={iconMoney} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">More savings means higher rates</h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div className="feature-item">
        <img src={iconSecurity} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </div>
    </div>
  );
}

export default Feature;
