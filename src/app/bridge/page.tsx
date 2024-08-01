import dynamic from "next/dynamic";





const Bridge = dynamic(
  () => import("@/ui/bridge/bridge"),
  {
    ssr: false,
  }
)

const Bridgepage = () => {

  return (
    <Bridge />
  );
}
export default Bridgepage;