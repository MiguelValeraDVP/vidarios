import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#ffcccc]`}
    >
      <p className=" font-bold text-[20px] text-[#40aa55]">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#868686aa] leading-[22px] md:leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
