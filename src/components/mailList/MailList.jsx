import './mailList.css';

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailtitle">Save time, save money!</h1>
      <span className="mailDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
        consequuntur.
      </span>
      <div className="mealInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
