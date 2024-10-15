import ModalComponent from "@/components/ModalComponent";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-3xl font-bold mt-10">Sample Modal</h1>
        <ModalComponent />
      </div>
    </div>
  );
}
