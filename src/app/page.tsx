import ModalComponent from "@/components/ModalComponent";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <h1 className="mt-10 text-3xl font-bold">Sample Modal</h1>
        <ModalComponent />
      </div>
    </div>
  );
}
