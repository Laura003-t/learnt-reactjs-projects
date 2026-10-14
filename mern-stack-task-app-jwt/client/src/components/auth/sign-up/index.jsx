import CommonForm from "../../common-form";
import { signUpFormControls } from "../../../config";
import { useForm } from "react-hook-form";
import { callRegisterUserApi } from "../../../services";

function SignUp() {

    const formData = useForm({
        defaultValues : {
            name : '',
            email : '',
            password : '',
        },
    });

    const {} = useToast()

    async function handleSubmit(getData) {

        const data = await callRegisterUserApi(getData)

        console.log(data, "data");

        if(data?.success) {
            toast({
                title : 'User register successful',
                description : 'We'
            })
        }
    }

    return <div>
        <CommonForm form={formData} 
        handleSubmit={handleSubmit}
        formControls={signUpFormControls}
        btnText={'Sign Up'}
        />
    </div>;
}

export default SignUp;

