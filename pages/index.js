import styles from "./../styles/Home.module.css"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import moment from "moment";

import ZipInputForm from '../components/ZipInputForm';




export default function Home() {
  const router = useRouter();

  const [hour, setHour] = useState(0)

  function handleSubmit(event) {
    event.preventDefault();
    const zipCode = event.target.zip.value;
    router.push(`/weather/${zipCode}`);
  }

  function getHour() {
    const _hour = moment(Date.now()).hour()
    setHour(_hour);
  }

  useEffect(() => {
    getHour();
  }, [])
  return (
    <div className={`${styles.inputFormContainer} sky-gradient-${hour}`}>
      <h1 className={`${styles.headerContent}`}>Weather Forecast</h1>
      <ZipInputForm onSubmit={handleSubmit} className={styles.zipCodeForm} buttonText="Enter ZIP">
      </ZipInputForm>
    </div>
  );
}
