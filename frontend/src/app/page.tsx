// src/app/page.tsx

import HeroSection from "./component/HeroSection";
import { MedicineCategories } from "./component/Medicine-categories";
import { RecentSearches } from "./component/Recent-searches";
import { ScanForFreeSection } from "./component/Scan-for-free-section";
import { TopSearchedMedicines } from "./component/Top-searched-medicines";

// Assuming Header is in layout or you move it here

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* If Header is not in layout.tsx, put it here: */}
      {/* <Header /> */}
      <HeroSection />
      <RecentSearches />
      <MedicineCategories />
      <ScanForFreeSection />
      <TopSearchedMedicines />
      {/* Other sections will go here */}
    </div>
  );
}
