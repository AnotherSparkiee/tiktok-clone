import { useState } from "react";
import { VideoAnalysisHeader } from "@/app/components/VideoAnalysisHeader";
import { VideoPreview } from "@/app/components/VideoPreview";
import { VideoStats } from "@/app/components/VideoStats";
import { TabNavigation } from "@/app/components/TabNavigation";
import { MetricsSection } from "@/app/components/MetricsSection";
import { ViewsChart } from "@/app/components/ViewsChart";
import { RetentionSection } from "@/app/components/RetentionSection";
import { TrafficSourcesSection } from "@/app/components/TrafficSourcesSection";
import { SearchQueriesSection } from "@/app/components/SearchQueriesSection";
import { OtherPublicationsSection } from "@/app/components/OtherPublicationsSection";
import { FireIcon } from "@/app/components/FireIcon";
import { ChevronRightIcon } from "@/app/components/ChevronRightIcon";
import { TotalViewersSection } from "@/app/components/TotalViewersSection";
import { ViewerTypesSection } from "@/app/components/ViewerTypesSection";
import { GenderSection } from "@/app/components/GenderSection";
import { AgeSection } from "@/app/components/AgeSection";
import { LocationsSection } from "@/app/components/LocationsSection";
import { MostFrequentWordsSection } from "@/app/components/MostFrequentWordsSection";
import { LikesAnalysisSection } from "@/app/components/LikesAnalysisSection";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-black text-white max-w-md mx-auto">
      <VideoAnalysisHeader />
      <VideoPreview />
      <VideoStats />
      <TabNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "overview" && (
        <>
          <div className="mx-3 mt-2 mb-2 bg-[#1e1e1e] rounded-[6px]">
            <MetricsSection />
            <ViewsChart />
          </div>
          <RetentionSection />
          <TrafficSourcesSection />
          <SearchQueriesSection />
          <OtherPublicationsSection />
        </>
      )}

      {activeTab === "viewers" && (
        <>
          <TotalViewersSection />
          <ViewerTypesSection />
          <GenderSection />
          <AgeSection />
          <LocationsSection />
        </>
      )}

      {activeTab === "engagement" && (
        <>
          <div className="mt-2">
            <MostFrequentWordsSection />
          </div>
          <LikesAnalysisSection />
        </>
      )}
    </div>
  );
}