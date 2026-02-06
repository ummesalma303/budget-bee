import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const SignUpSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z
      .string()
      .min(1, "Please enter an email address")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    // terms: z.boolean().refine(val => val === true, {
    //   message: "You must accept the terms"
    // })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SignUpType = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema)
  });

  const onSubmit = (data: SignUpType) => {
    console.log("SIGN UP SUCCESS", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      {/* Full Name */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">Full name</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <Input {...register("fullName")} className="pl-11 text-white" />
        </div>
        {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName.message}</p>}
      </div>

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

      {/* Confirm Password */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">Confirm Password</label>
        <Input {...register("confirmPassword")} type="password" className="text-white" />
        {errors.confirmPassword && (
          <p className="text-red-400 text-sm">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Terms
      // <div className="flex items-center gap-2">
      //   <Checkbox {...register("terms")} />
      //   <label className="text-sm text-slate-400">Accept Terms</label>
      // </div>
      // {errors.terms && <p className="text-red-400 text-sm">{errors.terms.message}</p>} */}

      <Button type="submit" className="w-full">
        Create account
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>

    </form>
  );
};

export default SignUpForm;