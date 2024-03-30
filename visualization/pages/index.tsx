import Image from "next/image";
import { Inter } from "next/font/google";
import Barchart from "../components/Barchart";
import * as Papa from "papaparse";

import { useCSVReader } from "react-papaparse";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = Papa.parse("data/batting_season_summary.csv");
  const { CSVReader } = useCSVReader();

  console.log(data);
  return <></>;
}
