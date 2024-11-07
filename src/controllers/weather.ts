import { Request, Response } from "express";

import { fetchApi } from "../utils";
const fetchLocation = async (req: Request, res: Response): Promise<any> => {
  try {
    fetchApi(
      `https://api.ipapi.com/api/check?access_key=${process.env.ACCESS_KEY}`
    ).then((response) => {
      return res.status(201).json(response);
    });
  } catch (error: unknown) {
    console.error(error);
    return res.status(403).json({
      error: null,
      message: "Something went wrong. Please try later.",
      severity: "error",
    });
  }
};
const fetchWeather = async (req: Request, res: Response): Promise<any> => {
  try {
    const { latitude = "", longitude = "" } = req.headers;
    if (latitude && longitude) {
      fetchApi(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.APP_ID}`
      ).then((response) => {
        return res.status(201).json(response);
      });
    } else {
      return res.status(403).json({
        error: null,
        message: "Latitude Or Longitude is missing in header request",
        severity: "error",
      });
    }
  } catch (error: unknown) {
    console.error(error);
    return res.status(403).json({
      error: null,
      message: "Something went wrong. Please try later.",
      severity: "error",
    });
  }
};

export { fetchLocation, fetchWeather };
