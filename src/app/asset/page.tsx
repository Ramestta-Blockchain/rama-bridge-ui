import dynamic from "next/dynamic";





const Asset = dynamic(
  () => import("@/ui/asset/asset"),
  {
    ssr: false,
  }
)

const Assetpage = () => {

  return (
    <Asset />
  );
}
export default Assetpage;