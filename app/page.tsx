import { Intro } from "@/components/Intro";
import {
  Marquees,
  Statement,
  ServiceList,
  Stack,
  Process,
  Finale,
} from "@/components/Sections";

/** Bölümler dönüşümlü: açık (kemik) → koyu → limon → video; köşeleri yuvarlak, üst üste biner. */
const block = "relative z-10 -mt-12 rounded-t-[3rem]";
export default function Page() {
  return (
    <>
      <Intro />
      <div
        className={`${block} bg-[#efece6] text-[#0a0b0d] [--stroke:#0a0b0d]`}
      >
        <Marquees />
        <Statement />
        <ServiceList />
      </div>
      <div className={`${block} bg-[#0a0b0d]`}>
        <Stack />
      </div>
      <div
        className={`${block} bg-[#d4ff3a] text-[#0a0b0d] [--stroke:#0a0b0d]`}
      >
        <Process />
      </div>
      <Finale />
    </>
  );
}
