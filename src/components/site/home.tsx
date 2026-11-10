import { DesktopHome } from "@/components/bc/DesktopHome";
import { MobileHome } from "@/components/bc/MobileHome";

/** Home page: copied reference layout for phones/tablets below 1200px and desktop from 1200px. */
export function Home() {
  return (
    <>
      <div className="min-[1200px]:hidden">
        <MobileHome />
      </div>
      <div className="hidden min-[1200px]:block">
        <DesktopHome />
      </div>
    </>
  );
}
