import CenterBox from "../components/CenterBox";
import SideBox from "../components/SideBox";
import informations from "../utils/informations";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="neomorphism h-full w-full max-w-[1980px] grid grid-cols-[20%_auto_20%] gap-4 p-5">
        <div className="relative flex flex-col gap-4">
          <SideBox
            title={informations.guilda.title}
            imageIcon={informations.guilda.imageIcon}
            description={informations.guilda.description}
          />
          <SideBox
            title={informations.guardianSpirit.title}
            imageIcon={informations.guardianSpirit.image}
            description={informations.guardianSpirit.description}
          />
          <SideBox title="teste" />
        </div>
        <div className="relative flex flex-col justify-between">
          {/* Ember= Brasa / Cindria= Cinzas ardentes */}
          <p className="neomorphism p-4 text-accent text-center text-2xl font-medium">
            Ember Cindria
          </p>
          <div className=" absolute inset-0 z-20 flex items-end justify-center">
            <CenterBox />
          </div>
        </div>
        <div className="relative flex flex-col gap-4">
          <SideBox
            title={informations.perfil.title}
            image={informations.perfil.image}
            description={informations.perfil.description}
          />
          <SideBox title="teste" />
          <SideBox title="teste" />
        </div>
      </div>
    </div>
  );
}
