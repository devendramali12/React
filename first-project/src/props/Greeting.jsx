const Greeting = (props) => {
  console.log(props); // {children:'Happy Holi'}

  let { children } = props;
  return (
    //   <>{<h2>{props.children}</h2>}</>;
    <h2>{children}</h2>
  );
};

export default Greeting;
