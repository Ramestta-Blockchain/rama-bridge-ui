import dynamic from "next/dynamic";





const Contact = dynamic(
  () => import("@/ui/contact/contact"),
  {
    ssr: false,
  }
)

const Contactpage = () => {

  return (
    <Contact />
  );
}
export default Contactpage;