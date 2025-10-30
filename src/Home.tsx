import TaskCount from "./TaskCount";
interface HomeProps
{
    handleLogin : ()=>void
    handleSignUp:()=>void
}

const Home = ({handleLogin,handleSignUp}:HomeProps) => {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-2xl px-4 py-10 space-y-6">
          <TaskCount doneTask={0} totalTask={0} />
        </div>

        {/* Button Section */}
        <div className="mx-auto max-w-2xl px-4 py-10 flex justify-center gap-6">
          <button onClick={handleLogin} className="text-sm md:text-base font-medium px-8 py-2 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/30 hover:bg-sky-500/30 hover:border-sky-400/50 transition duration-300">
            Log In
          </button>

          <button onClick={handleSignUp} className="text-sm md:text-base font-medium px-8 py-2 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/30 hover:bg-sky-500/30 hover:border-sky-400/50 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
