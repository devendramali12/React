const Comp1 = (props) => {
  console.log(props); // {student :'Akshat',rollno:18,member:true,task: undefined,project:null}

  let { student, rollno, member, task, project } = props; // destructuring

  // You cannot display a boolean , undefined , null datatype on Ui.

  return (
    <>
      <h2>Comp1</h2>
      <h3>Srudent name : {student}</h3>
      <h3>Roll no : {rollno}</h3>
      <h3>
        Membership : {member == true ? "Active Member" : "Membership Expired"}
      </h3>
      <h3>
        Task : {task == undefined ? "Task not assigned" : "Task Assigned"}
      </h3>
      <h3>Project:{project == null ? "Project not done" : "Project done"}</h3>
    </>
  );
};

export default Comp1;
