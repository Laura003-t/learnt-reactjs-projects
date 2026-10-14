import { useForm } from "react-hook-form";
import CommonForm from "../../common-form";
import { signInFormControls } from "../../../config";

function SignIn() {

    const formData = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function handleSubmit(){

    }

    return <div>
        <CommonForm
        btnText={'Sign In'}
        handleSubmit={handleSubmit}
        formControls={signInFormControls}
        form={formData}
        />
    </div>;
}

export default SignIn;