import ZustandButton from "@/components/ZustandButton";
import ZustandHeader from "@/components/ZustandHeader";

const ZustandPage = () => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center`}
    >
      <ZustandHeader/>
      <ZustandButton/>
    </div>
  );
};

export default ZustandPage;
