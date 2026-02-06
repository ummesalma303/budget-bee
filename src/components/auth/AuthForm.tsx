
import type { AuthProps } from '@/types/home';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const AuthForm = ({ isSignUp}: AuthProps) => {


  return (
    <div className="space-y-4">

      {/* Full Name */}
      {isSignUp && (
       <SignUpForm/>
      )}
      {
        !isSignUp && (

          <SignInForm></SignInForm>
        )
      }


     
    </div>
  );
};

export default AuthForm;
