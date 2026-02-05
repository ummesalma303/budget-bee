import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import type { AuthProps } from '@/types/home';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const RegisterUserSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required").optional(),
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
    terms: z.boolean().optional()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type RegisterUserSchemaType = z.infer<typeof RegisterUserSchema>;

const AuthForm = ({ isSignUp, setIsSignUp }: AuthProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterUserSchemaType>({
    resolver: zodResolver(RegisterUserSchema)
  });

  const onSubmit = (data: RegisterUserSchemaType) => {
    console.log('===============')
    console.log("SUCCESS", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      {/* Full Name */}
      {isSignUp && (
        <div>
          <label className="block text-sm text-slate-300 mb-2">Full name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <Input
              {...register("fullName")}
              placeholder="John Doe"
              className="pl-11 text-white"
            />
          </div>
          {errors.fullName && (
            <p className="text-red-400 text-sm">{errors.fullName.message}</p>
          )}
        </div>
      )}

      {/* Email */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <Input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="pl-11 text-white"
          />
        </div>
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <Input
            {...register("password")}
            type="password"
            placeholder="••••••••"
            className="pl-11 text-white"
          />
        </div>
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}
      </div>
      {/* confirm password */}
<div>
          <label className="block text-sm mb-2 text-slate-300">Confirm Password</label>
          <Input
            {...register("confirmPassword")}
            type="password "
            className='text-white'
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

      {/* Terms */}
      {isSignUp && (
        <div className="flex items-center gap-2">
          <Checkbox {...register("terms")} />
          <label className="text-sm text-slate-400">
            Accept Terms
          </label>
        </div>
      )}

      {/* Submit */}
      <Button type="submit" className="w-full">
        {isSignUp ? "Create account" : "Sign in"}
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>

      {/* Toggle */}
      <p className="text-center text-slate-400 pt-2">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-pink-400 ml-2"
        >
          {isSignUp ? 'Sign in' : 'Sign up'}
        </button>
      </p>

    </form>
  );
};

export default AuthForm;
