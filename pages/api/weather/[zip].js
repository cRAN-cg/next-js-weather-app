export default async function handler(req, res) {
  const { zip } = req.query;

  const controller = new AbortController();
  const signal = controller.signal;
  // Fetch weather data from an API
  const { NEXT_PUBLIC_OPENWEATHERMAP_API_KEY } =
    process.env;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&appid=${NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
  try {
    const response = await fetch(apiUrl, { signal });
    const data = await response.json();

    // Send the extracted data back to the client
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  } finally {
    controller.abort();
  }
}
