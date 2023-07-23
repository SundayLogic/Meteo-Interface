import LuminosityDisplay from "../molecules/LuminosityDisplay";
import Tablas from "../organisms/Tablas";

const Home = () => {
    return(
        <div className="flex flex-col h-[100vh] p-8 justify-between">
            <LuminosityDisplay />
            <Tablas />
        </div>
    );
}
export default Home;