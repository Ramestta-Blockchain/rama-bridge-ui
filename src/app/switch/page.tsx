import dynamic from "next/dynamic";





const Switch = dynamic(
  () => import("@/ui/switch/switch"),
  {
    ssr: false,
  }
)

const Switchpage = () => {

  return (
    <Switch />
  );
}
export default Switchpage;