import dynamic from "next/dynamic";





const Ecosystem = dynamic(
  () => import("@/ui/ecosystem/ecosystem"),
  {
    ssr: false,
  }
)

const Ecosystempage = () => {

  return (
    <Ecosystem />
  );
}
export default Ecosystempage;