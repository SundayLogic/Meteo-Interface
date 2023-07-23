import LuminosityDisplay from "../molecules/LuminosityDisplay";
import MetarDisplay from "../molecules/MetarDisplay";
import RvrDisplay from "../molecules/RvrDisplay";

const Tablas = () => {
    return(
        <div className="flex flex-col space-y-6">
           <RvrDisplay />
           <MetarDisplay />
        </div>
    );
}
export default Tablas;