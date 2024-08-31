import ZustandButton from "@/components/ZustandButton";
import ZustandHeader from "@/components/ZustandHeader";
import ZustandQuestion from "@/components/ZustandQuestion";

const ZustandPage = () => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center`}
    >
      <ZustandHeader/>

      <div className="flex flex-wrap gap-4 justify-center">
        <ZustandQuestion/>
        <ZustandQuestion/>
        <ZustandQuestion/>
      </div>
    </div>
  );
};

export default ZustandPage;
