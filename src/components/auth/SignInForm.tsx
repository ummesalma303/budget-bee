import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const SignInSchema = z.object({
  email: z.string().email("Enter valid email"),
  password: z.string().min(1, "Password is required")
});

type SignInType = z.infer<typeof SignInSchema>;

const SignInForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInType>({
    resolver: zodResolver(SignInSchema)
  });

  const onSubmit = (data: SignInType) => {
    console.log("SIGN IN SUCCESS", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      {/* Email */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <Input {...register("email")} type="email" className="pl-11 text-white" />
        </div>
        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <Input {...register("password")} type="password" className="pl-11 text-white" />
        </div>
        {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
      </div>

      <Button type="submit" className="w-full">
        Sign In
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>

    </form>
  );
};

export default SignInForm;
