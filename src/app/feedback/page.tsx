import dynamic from "next/dynamic";





const Feedback = dynamic(
  () => import("@/ui/feedback/feedback"),
  {
    ssr: false,
  }
)

const Feedbackpage = () => {

  return (
    <Feedback />
  );
}
export default Feedbackpage;