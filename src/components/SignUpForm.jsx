import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles, signUpUser } from "../redux/actions/userActions";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const roles = useSelector((state) => state.user.roles);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const [isStore, setIsStore] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role_id: "1", // Default to 'customer' role
    },
  });

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  useEffect(() => {
    if (roles.length > 0) {
      const customerRole = roles.find((role) => role.name === "customer");
      if (customerRole) {
        setValue("role_id", customerRole.id.toString());
      }
    }
  }, [roles, setValue]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const password = watch("password");

  const onSubmit = async (data) => {
    const formattedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      role_id: parseInt(data.role_id),
      ...(isStore && {
        store: {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_id,
          bank_account: data.store_bank_account,
        },
      }),
    };

    try {
      await dispatch(signUpUser(formattedData));
      toast.success(
        "Sign up successful! Please check your email to activate your account."
      );
      history.push("/login");
    } catch (err) {
      // Error is handled in the reducer and displayed via the useEffect above
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <input
          type="text"
          {...register("firstName", { required: true, minLength: 3 })}
          placeholder="First Name"
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <span className="text-red-500">
            First name is required (min 3 characters)
          </span>
        )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          {...register("lastName", { required: true, minLength: 3 })}
          placeholder="Last Name"
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <span className="text-red-500">
            Last name is required (min 2 characters)
          </span>
        )}
      </div>

      <div className="mb-4">
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <span className="text-red-500">Valid email is required</span>
        )}
      </div>

      <div className="mb-4">
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
          })}
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        {errors.password && (
          <span className="text-red-500">
            Password must be at least 8 characters, include numbers, lowercase,
            uppercase, and special characters
          </span>
        )}
      </div>

      <div className="mb-4">
        <input
          type="password"
          {...register("passwordConfirmation", {
            required: true,
            validate: (value) => value === password || "Passwords do not match",
          })}
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
        />
        {errors.passwordConfirmation && (
          <span className="text-red-500">
            {errors.passwordConfirmation.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <select
          {...register("role_id", { required: true })}
          className="w-full p-2 border rounded"
          onChange={(e) => setIsStore(e.target.value === "store")}
        >
          <option value="">Select Role</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
        {errors.role_id && (
          <span className="text-red-500">Role is required</span>
        )}
      </div>

      {isStore && (
        <>
          <div className="mb-4">
            <input
              type="text"
              {...register("store_name", { required: true, minLength: 3 })}
              placeholder="Store Name"
              className="w-full p-2 border rounded"
            />
            {errors.store_name && (
              <span className="text-red-500">
                Store name is required (min 3 characters)
              </span>
            )}
          </div>

          <div className="mb-4">
            <input
              type="tel"
              {...register("store_phone", {
                required: true,
                pattern: /^(\+90|0)?[1-9][0-9]{9}$/,
              })}
              placeholder="Store Phone"
              className="w-full p-2 border rounded"
            />
            {errors.store_phone && (
              <span className="text-red-500">
                Valid Turkish phone number is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              {...register("store_tax_id", {
                required: true,
                pattern: /^T\d{4}V\d{6}$/,
              })}
              placeholder="Store Tax ID"
              className="w-full p-2 border rounded"
            />
            {errors.store_tax_id && (
              <span className="text-red-500">
                Valid Tax ID is required (Format: TXXXXVXXXXXX)
              </span>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              {...register("store_bank_account", {
                required: true,
                pattern: /^TR\d{2}[0-9A-Z]{5}[A-Z0-9]{17}$/,
              })}
              placeholder="Store Bank Account (IBAN)"
              className="w-full p-2 border rounded"
            />
            {errors.store_bank_account && (
              <span className="text-red-500">Valid IBAN is required</span>
            )}
          </div>
        </>
      )}

      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-blue-300"
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;
