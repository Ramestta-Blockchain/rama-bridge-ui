import dynamic from "next/dynamic";





const Homepage = dynamic(
  () => import("@/ui/dashboard/dashboardcmp"),
  {
    ssr: false,
  }
)

const Home = () => {

  return (
    <Homepage />
  );
}
export default Home;