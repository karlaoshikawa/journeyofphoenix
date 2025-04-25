import CenterBox from "./components/CenterBox";
import SideBox from "./components/SideBox";
import informations from "./utils/informations";

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="neomorphism h-full w-full max-w-[1980px] grid grid-cols-[20%_auto_20%] gap-4 p-5">
        <div className="relative flex flex-col gap-4">
          <SideBox
            title={informations.guilda.title}
            image={informations.guilda.image}
            description={informations.guilda.description}
            link={informations.guilda.link}
            descriptionModal={informations.guilda.descriptionModal}
           imagesModal={informations.guilda.imagesModal}
          />
          <SideBox
            title={informations.guardianSpirit.title}
            image={informations.guardianSpirit.image}
            description={informations.guardianSpirit.description}
            descriptionModal={informations.guardianSpirit.descriptionModal}
          />
          <SideBox
            title={informations.members.title}
            image={informations.members.image}
            description={informations.members.description}
            descriptionModal={informations.members.descriptionModal}
            imagesModal={informations.members.imagesModal}
          />
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
            descriptionModal={informations.perfil.descriptionModal}
          />
          <SideBox
            title={informations.skills.title}
            image={informations.skills.image}
            description={informations.skills.description}
            descriptionModal={informations.skills.descriptionModal}
          />
          <SideBox
            title={informations.lastbattles.title}
            image={informations.lastbattles.image}
            description={informations.lastbattles.description}
            descriptionModal={informations.lastbattles.descriptionModal}
            imagesModal={informations.lastbattles.imagesModal}
          />
        </div>
      </div>
    </main>
  );
}
