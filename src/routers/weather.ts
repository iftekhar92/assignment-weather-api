import { Router } from "express";

import { fetchLocation, fetchWeather } from "../controllers/weather";

const weatherRoute = () => {
  const router = Router();

  router.get("/get-location", fetchLocation);
  router.get("/get-weather", fetchWeather);

  return router;
};

export { weatherRoute };
