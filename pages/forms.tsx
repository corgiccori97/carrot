import { useForm, FieldErrors } from 'react-hook-form';
import { useState } from "react";
useState

interface JobForm {
    dpt:string;
    motive:string;
    salary:string;
    introduce:string;
    dream:string;
    email:string;
}

export default function Forms() {
    const { register,
            handleSubmit, 
            formState: { errors },
            watch, } = useForm<JobForm>({
        mode:"onChange",
    });
    const onValid = (data:JobForm) => {
        console.log("Valid");
    };
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);
    };
    const [submit, setSubmit] = useState(false);
    const [result, setResult] = useState({});
    const onClick = () => {
        setSubmit((prev) => !prev);
        console.log(watch());
    };
    
    return (
        <div className="bg-green-50 w-full h-screen">
            <form onSubmit={handleSubmit(onValid, onInvalid)} className="p-10 m-10 w-1/4 bg-pink-100 mx-auto border-gray-900 border-[2.5px] rounded-2xl shadow-[4px_4px_black]">
                <h1 className="font-extrabold text-2xl mb-6 text-center">Job Application Form</h1>

                <p className="font-bold">
                    What department do you want to work for? 
                    <span className="text-red-600">{errors.dpt?.message}</span>
                </p>
                <div className="flex flex-col space-y-1">
                <label>
                    <input {...register("dpt", {required: "*required"})} type="radio" name="dpt" value="sales" />
                    Sales
                </label>
                <label>
                    <input {...register("dpt", {required: "*required"})} type="radio" name="dpt" value="marketing" />
                    Marketing
                </label>
                <label>
                    <input {...register("dpt", {required: "*required"})} type="radio" name="dpt" value="accounting" />
                    Accounting
                </label>
                <label>
                    <input {...register("dpt", {required: "*required"})} type="radio" name="dpt" value="serivce" />Customer Service
                </label>
                </div>

                <p className="font-bold mt-5">
                    Why do you want to join this company?
                    <span className="text-red-600">{errors.motive?.message}</span>
                </p>
                <div className="flex flex-col space-y-1">
                <label>
                    <input {...register("motive", {required: "*required"})} type="radio" name="motive" value="money" />I want money!
                </label>
                <label>
                    <input {...register("motive", {required: "*required"})} type="radio" name="motive" value="love" />I love this company
                </label>
                <label>
                    <input {...register("motive", {required: "*required"})} type="radio" name="motive" value="learn" />I want to learn
                </label>
                <label>
                    <input {...register("motive", {required: "*required"})} type="radio" name="motive" value="donno" />I don't know why
                </label>
                </div>

                <p className="font-bold mt-5">Salary</p>
                {errors.salary?.message}
                <select {...register("salary", {
                    required: "*required"
                })}
                className="w-full rounded-md border-3 border-gray-900 font-semibold">
                    <option value="50">$50K</option>
                    <option value="60">$60K</option>
                    <option value="70">$70K</option>
                    <option value="80">$80K</option>
                    <option value="90">$90K</option>
                </select>

                <p className="font-bold mt-5">Introduce yourself</p>
                <input {...register("introduce", {
                    required: "Please introduce yourself",
                })} 
                type="text" 
                className='w-full rounded-md border-3 border-gray-900' />
                <span className="text-red-600 font-semibold">{errors.introduce?.message}</span>

                <p className="font-bold mt-5">Tell us what your dreams are</p>
                <textarea {...register("dream", {
                    required: "Please tell us what your dreams are.",
                    // validate: {
                    //     length: {
                    //         value: "10",
                    //         message: "Please write more than 10 characters.",
                    //     }
                    // },
                })}
                className="w-full rounded-md border-3 border-gray-900" />
                <span className="text-red-600 font-semibold">{errors.dream?.message}</span>

                <p className="font-bold mt-5">Email</p>
                <input 
                {...register("email", {
                    required: "Please write down your email",
                    validate: {
                        onlyNaver: (value)=> value.includes("@naver") || "Only @naver is allowed.",
                    },
                })}
                type="email" 
                className='w-full rounded-md border-3 border-gray-900'/>
                <span className="text-red-600 font-semibold">{errors.email?.message}</span>

                <input className="block mt-6 font-bold border-2 border-gray-800 shadow-[2px_2px_black] rounded-md  bg-yellow-300 w-full py-3 cursor-pointer" type="submit" 
                value="Give me this job" 
                onClick={onClick} />
                {submit ? watch("introduce") : ""}
            </form>
        </div>
    );
}

// 1. Salary required 해결하기