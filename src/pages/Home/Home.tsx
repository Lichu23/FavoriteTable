import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPeople } from "@/redux/states/people";
import { People } from "@/data";
import PeopleTable from "./components/PeopleTable/PeopleTable";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
}
