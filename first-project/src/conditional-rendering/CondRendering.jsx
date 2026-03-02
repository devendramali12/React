const CondRendering = () => {
  let online = true;
  //   let sport = "football";
  //   let city = "Mumbai";
  //   let age = 19;
  //? if-else
  //   if (online == true) {
  //     return (
  //       <>
  //         <h2>Welcome to Conditional Rendering.</h2>
  //         <p>User is Online</p>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <h2>User is Offline</h2>
  //       </>
  //     );
  //   }
  // };

  //? else-if
  //   if (sport == "cricket") {
  //     return (
  //       <>
  //         <h2>Cricket</h2>
  //         <p>I Like Cricket</p>
  //       </>
  //     );
  //   } else if (sport == "hockey") {
  //     return (
  //       <>
  //         <h2>Hockey</h2>
  //         <p>i like hockey</p>
  //       </>
  //     );
  //   } else if (sport == "football") {
  //     return (
  //       <>
  //         <h2>Foot-Ball</h2>
  //         <p>i like football</p>
  //       </>
  //     );
  //   } else {
  //     return <h2>sport did not match</h2>;
  //   }
  // };

  //? switch

  //   switch (city) {
  //     case "Jaipur":
  //       return (
  //         <>
  //           <h2>Jaipur</h2>
  //           <h3>Hawa-Mahal</h3>
  //         </>
  //       );
  //     case "Mumbai":
  //       return (
  //         <>
  //           <h2>Mumabai</h2>
  //           <h3>vadapav</h3>
  //         </>
  //       );
  //     case "Delhi":
  //       return (
  //         <>
  //           <h3>Delhi</h3>
  //           <h2>Chole Bhature</h2>
  //         </>
  //       );
  //     default:
  //       return <h2>City Did not Match.</h2>;
  //   }
  // };

  //? Short-circuiting
  //   return (
  //     <>
  //       <h2>Let's use Short circuting</h2>
  //       <h3>{age > 18 && "Eligible for voter-id"}</h3>
  //     </>
  //   );

  //! Ternary Operator (Condition ? Stmt1 : Stmt2)
  return (
    <>
      <h2>Conditional Rendering</h2>
      <h3>{online == true ? "User is online" : "User is offline"}</h3>
    </>
  );
};

export default CondRendering;
