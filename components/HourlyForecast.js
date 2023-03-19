import moment from 'moment';
export default function HourlyForecast({ item }) {
  return (
    <li key={item.dt}>
      <div>{moment(item.dt * 1000).format('h:mm a')}</div>
      <div>{item.weather[0].description}</div>
      <div>{item.main.temp} °F</div>
    </li>
  )
}