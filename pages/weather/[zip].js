

import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import moment from 'moment';
import styles from '../../styles/Weather.module.css';
import ZipInputForm from '../../components/ZipInputForm';
import HourlyForecast from '../../components/HourlyForecast';

const Weather = ({ data }) => {
  const router = useRouter();
  const { zip } = router.query;

  const [weather, setWeather] = useState(data);

  useEffect(() => {
    if (!weather || !weather?.city?.name) {
      router.push('/');
    }
  }, [weather]);

  const handleChange = async (event) => {
    event.preventDefault();
    const newZip = event.target.zip.value;
    const res = await fetch(`/api/weather/${newZip}`);
    const { data = null } = await res.json();
    setWeather(data);
  };

  // Group the weather items by date
  const groupedWeather = weather ? weather.list?.reduce((result, item) => {
    const date = moment(item.dt * 1000).format('MMM Do YYYY');
    if (!result[date]) {
      result[date] = [];
    }
    result[date].push(item);
    return result;
  }, {}) : null;

  return (
    <>
      {
        weather && weather.list ?
          <div className={`sky-gradient-${moment(Date.now()).hour()}`}>
            <h1 className={styles.heading}>
              Weather Forecast for {weather.city.name}
            </h1>
            <ZipInputForm onSubmit={handleChange} className={styles.zipCodeForm} zip={zip} buttonText="Update ZIP">
            </ZipInputForm>
            <div className={styles.weatherList}>
              {Object.entries(groupedWeather).map(([date, items]) => (
                <div key={date} className={styles.weatherGroup}>
                  <h2>{date}</h2>
                  <ul>
                    {items.map((item) => (
                      <HourlyForecast item={item} key={item.dt} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div > : null
      }
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { zip } = params;

  const { NEXT_PUBLIC_OPENWEATHERMAP_API_KEY } =
    process.env;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&appid=${NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
  );
  const data = await res.json()
  return {
    props: {
      data,
    },
  };
}

export default Weather;




