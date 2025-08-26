'use client';

import { useEffect } from "react";
import MyNavbar from "@/components/Generic/Navbar";
import {
  FACULTY_CARDS,
  IMAGE_COMPONENT_2,
  LANDING_IMAGE_COMPONENT,
} from "@/components/Home/HomePageComponents";
import PopularFaculty from "@/components/Faculty/PopularFaculty";
import { useRouter } from "next/navigation";
import Footer from "@/components/Generic/Footer";
import { ensureGtag, trackPageVisit } from "@/analytics/analytics_invokers";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    trackPageVisit();
    ensureGtag();
  }, []);

  return (
    <div>
      <MyNavbar />
      <LANDING_IMAGE_COMPONENT navigate={router.push} />
      <PopularFaculty />
      <IMAGE_COMPONENT_2 navigate={router.push} />
      <FACULTY_CARDS navigate={router.push} />
      <Footer />
    </div>
  );
}