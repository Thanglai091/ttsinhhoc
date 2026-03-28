import SlideContainer from "@/components/SlideContainer";

import Slide1Welcome from "@/components/slides/Slide1Welcome";
import Slide2Intro from "@/components/slides/Slide2Intro";
import Slide3MoldGeneral from "@/components/slides/Slide3MoldGeneral";
import Slide4MoldMechanics from "@/components/slides/Slide4MoldMechanics";
import Slide5BacteriaGeneral from "@/components/slides/Slide5BacteriaGeneral";
import Slide6BacteriaMechanics from "@/components/slides/Slide6BacteriaMechanics";
import Slide7Advantages1 from "@/components/slides/Slide7Advantages1";
import Slide8Advantages2 from "@/components/slides/Slide8Advantages2";
import Slide9ProcessDry from "@/components/slides/Slide9ProcessDry";
import Slide10ProcessWet from "@/components/slides/Slide10ProcessWet";
import Slide11ThankYou from "@/components/slides/Slide11ThankYou";

export default function Home() {
  const slides = [
    <Slide1Welcome key="1" />,
    <Slide2Intro key="2" />,
    <Slide3MoldGeneral key="3" />,
    <Slide4MoldMechanics key="4" />,
    <Slide5BacteriaGeneral key="5" />,
    <Slide6BacteriaMechanics key="6" />,
    <Slide7Advantages1 key="7" />,
    <Slide8Advantages2 key="8" />,
    <Slide9ProcessDry key="9" />,
    <Slide10ProcessWet key="10" />,
    <Slide11ThankYou key="11" />
  ];

  return (
    <main className="w-full h-screen overflow-hidden bg-green-950 text-white selection:bg-emerald-500/30">
      <SlideContainer slides={slides} />
    </main>
  );
}
