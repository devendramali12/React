import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";

const Newcomp = () => {
  let rainbow = [
    "violet",
    "indigo",
    "blue",
    "grren",
    "yellow",
    "orange",
    "red",
  ];

  let weekend = {
    plan: "watch movie",
    partner: "mom",
  };

  return (
    <>
      <h2>Newcomp</h2>
      <Comp1
        student="Akshat"
        rollno={18}
        member={true}
        task={undefined}
        project={null}
      />
      <Comp2 rainbow={rainbow} />
      <Comp3 weekend={weekend} />
    </>
  );
};
export default Newcomp;
