import dynamic from "next/dynamic";





const Transaction = dynamic(
  () => import("@/ui/transaction/transation"),
  {
    ssr: false,
  }
)

const Transactionpage = () => {

  return (
    <Transaction />
  );
}
export default Transactionpage;