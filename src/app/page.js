import Notification from "@/components/Notification/Notification";
import Navbar from "@/components/navbar/Navbar";
import Slider from "@/components/slider/Slider";

export default function Home() {
  return (
    <>
      <Notification />
      <Navbar />
      <div >
        <Slider />
      </div>
    </>
  );
}
