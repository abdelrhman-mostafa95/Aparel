import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function FormRegister() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleMySubmit(data) {
    console.log(data);
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <form
        onSubmit={handleSubmit(handleMySubmit)}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-6 border"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-500 text-sm mt-1">
            Fill in the details to get started
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="userEmail" className="text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="userEmail"
            placeholder="example@email.com"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-gray-700 font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="01xxxxxxxxx"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            {...register("phone", {
              required: "Phone number is required",
              minLength: {
                value: 8,
                message: "Phone number must be 8 digits",
              },
              maxLength: {
                value: 20,
                message: "Phone number must be 20 digits",
              },
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Phone number must contain only digits",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must be less than 20 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 shadow-md transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormRegister;
