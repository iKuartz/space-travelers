import { useSelector } from "react-redux";

export default function Profiles() {
  const bookedRockets = useSelector((state) => state.rockets).filter(
    (rocket) => rocket.booked,
  );
  const bookedMissions = useSelector((state) => state.missions).filter(
    (mission) => mission.joined,
  );
}
