import { useEffect, useState } from "react";
import Dropdown from "../../components/atoms/Dropdown";
import styles from "./start.module.css";

const ZerodhaStart = () => {
  const [selectedYear, setSelectedYear] = useState();
  const [timer, setTimer] = useState(7);
  const onSelect = (ev) => {
    setSelectedYear(ev.target.value);
  };

  useEffect(() => {
    let interval;
    if (!!selectedYear & !interval) {
      interval = setInterval(() => {
        console.log(timer)
        if (timer > 0) {
          setTimer((timer) => timer - 1);
        } else {
          clearInterval(interval);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [selectedYear, timer]);

  return (
    <div className={styles.pageContainer}>
      <main className={styles.card}>
        <h1 className={styles.title}>Let's start</h1>
        <h2 className={styles.subtext}>
          When did you start investing with Zerodha?
        </h2>
        <Dropdown onChange={onSelect} />

          <div className="text-lg text-center">
          {selectedYear ? (
            `Alright, your portfolio XIRR is just about
            ${Math.round(((new Date().getFullYear() - selectedYear + 1 + 1) * 25) / 60)}
            minutes away.`) : <>&nbsp;</>}
            <br />
            {timer <=5 ? (`Continuing in ${timer}s...`) : ''}
          </div>
      </main>
    </div>
  );
};

export default ZerodhaStart;
