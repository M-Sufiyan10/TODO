import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const SignUpSchema = z.object({
  firstName: z.string().min(1,'First Name required').regex(/^[A-Za-z]+$/, "Digits and Special Characters aren't allowed"),
  lastName: z.string().min(1,'Last Name required').regex(/^[A-Za-z]+$/,"Digits and Special Characters aren't allowed"),
  email: z.email("Email Required"),
  password: z.string().min(8, "Password must contains 8 characters").regex(/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/, 'Password must contain atleast 1 Uppercase,Special Character and Digit'),
  confirmPassword: z.string().min(1,'Confirm your Password'),
  contactNumber: z.string().regex(/^\d{11}$/, "Number must be exactly 11 digits"),
  age: z.number('Age must be numeric').min(18,'Age must be between 18 and 60').max(60,'Age must be between 18 and 60'),
}).refine((data)=>data.password === data.confirmPassword,{
    error:'Password do not match',
    path:['confirmPassword']
});
type FormFields = z.infer<typeof SignUpSchema>;
const Signup = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log("Submitted data :", data);
    navigate('/todo')
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 shadow-2xl p-8">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-semibold text-white">
              Create your account
            </h1>
            <p className="mt-1 text-sm text-white/60">
              Join us by filling in the information below
            </p>
          </div>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                First name
              </label>
              <input
                {...register("firstName")}
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.firstName && (
                <div className="text-red-400">{errors.firstName.message}</div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                Last name
              </label>
              <input
                {...register("lastName")}
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.lastName && (
                <div className="text-red-400">{errors.lastName.message}</div>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-white/80">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.email && (
                <div className="text-red-400">{errors.email.message}</div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.password && (
                <div className="text-red-400">{errors.password.message}</div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                Confirm password
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Re-enter your password"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.confirmPassword && (
                <div className="text-red-400">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                Contact number
              </label>
              <input
                {...register("contactNumber")}
                type="tel"
                placeholder="+921234567"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.contactNumber && (
                <div className="text-red-400">
                  {errors.contactNumber.message}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                Age
              </label>
              <input
                {...register("age",{valueAsNumber:true})}
                type="number"
                placeholder="18"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.age && (
                <div className="text-red-400">{errors.age.message}</div>
              )}
            </div>

            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 active:scale-[0.98] transition-all border border-white/10"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-white/70">
            Already registered?
            <a
              href="/login"
              className="ml-1 text-sky-300 hover:text-sky-200 underline underline-offset-4"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
