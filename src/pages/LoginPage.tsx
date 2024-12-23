import logo from "../assets/pexels-pixabay-269140.jpg";

const LoginPage = () => {
  return (
    <div
      className="grid grid-rows-[auto_auto_auto]  w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="bg-red-500 h-32">navbar</div>
      <div className="bg-blue-500 h-auto">login form</div>
      <div className="bg-green-500 h-32">footer</div>
    </div>
  );
};

export default LoginPage;
