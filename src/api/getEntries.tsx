import { appConfig } from "@/utils/config";
import React, { useEffect } from "react";

const { accesToken, baseURL, environmentId, spaceId } = appConfig;
export const getEntries = async () => {
  const res = await fetch(
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3e618d96ba50a0abf5748b21f83aeb56&hash=b279188c8a45ce397e5cd9c0fb9eb6f3",
    {
      next: { revalidate: 10 }, // memvalidasi setiap 10 detik untuk mengambil data baru
    }
  );

  return res.json();
};
