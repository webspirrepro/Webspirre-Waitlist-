import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { supabase } from "@/config/supabase";
import { Poppins } from "next/font/google";
import cx from "classnames";
import { ModalType } from "@/types/types";
import FormSuccessModal from "@/components/modals/FormSuccessModal";
import AOS from "aos";
import {
  countryOptions_,
  industryOptions_,
  specializationOptions_,
} from "@/utils/data";

// Define Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  lastName: Yup.string().required("LastName is required"),
  country: Yup.string().required("Country is required"),
  specialization: Yup.string().required("Your specialization is required"),
  industry: Yup.string().required("Industry is required"),
});

/// options type
interface Option {
  value: string;
  label: string;
}

interface FormData {
  name: string;
  email: string;
  lastName: string;
  country: string;
  specialization: string;
  industry: string;
}

const carterOne = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const ContactForm: React.FC<ModalType> = ({
  toogleModal,
  open,
  videoToggle,
}) => {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  const initialValues: FormData = {
    name: "",
    email: "",
    lastName: "",
    country: "",
    industry: "",
    specialization: "",
  };

  const [screenSize, setScreenSize] = React.useState("");
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    // Function to update screen size
    const updateScreenSize = () => {
      const width = window.innerWidth;
      let size = "";

      if (width < 576) {
        size = "Extra Small (XS)";
      } else if (width >= 576 && width < 768) {
        size = "Small (SM)";
      } else if (width >= 768 && width < 992) {
        size = "Medium (MD)";
      } else if (width >= 992 && width < 1200) {
        size = "Large (LG)";
      } else {
        size = "Extra Large (XL)";
      }

      setScreenSize(size);
    };

    // Event listener to update screen size on resize
    window.addEventListener("resize", updateScreenSize);

    // Initial call to set screen size
    updateScreenSize();
    setUsername(JSON.stringify(localStorage.getItem("username")));

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const handleSubmit = async (
    values: FormData,
    { resetForm }: FormikHelpers<FormData>
  ) => {
    console.log(values);
    // Handle form submission logic here
    try {
      // Destructure formData object
      const { name, lastName, email, country, specialization, industry } =
        values;
      // Insert formData into Supabase
      const { data, error } = await supabase
        .from("waitlist_form")
        .insert([
          {
            name,
            lastName,
            email,
            country,
            specialization,
            industry,
          },
        ])
        .select();

      localStorage.setItem("username", name as string);
      toogleModal();
      // resetForm();
      // Reset form after 15 seconds
      setTimeout(() => {
        resetForm();
      }, 20000);

      // Handle errors
      if (error) {
        console.error("Error inserting data into Supabase:", error.message);
        return;
      }

      // Handle success
      console.log("Data inserted into Supabase:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue, values, resetForm }) => (
          <>
            {/* Modal */}
            <FormSuccessModal
              toogleModal={toogleModal}
              name={`${values.name}`}
              //name={username} 
              open={open}
              resetForm={resetForm}
              videoToggle={videoToggle}
            />
            {/* Form Content */}
            <Form
              className="p-2 md:pt-20 pb-24 md:pb-32 md:px-20 shadow-xl rounded-sm md:rounded-2xl space-y-10 md:space-y-20 w-full bg-white"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row space-y-3 md:space-x-24 w-full justify-center text-xs md:text-xl font-bold">
                <div className="flex-1 flex-col space-y-8">
                  <div
                    className={cx(
                      carterOne.className,
                      "flex flex-col space-y-3"
                    )}
                  >
                    <label htmlFor="name">First name</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your firstName"
                      className={cx(
                        carterOne.className,
                        "block w-full py-4 md:py-6 px-4 rounded-xl  border border-gray-300 focus:outline-none focus:border-blue-500 placeholder:text-xs md:placeholder:text-xl placeholder:font-light"
                      )}
                    />

                    <ErrorMessage
                      name="name"
                      component="div"
                      className={cx(
                        carterOne.className,
                        "error text-red-900",
                        !errors.name && "visible block"
                      )}
                    />
                    {/* {screenSize} */}
                  </div>

                  <div
                    className={cx(
                      carterOne.className,
                      "flex flex-col space-y-3"
                    )}
                  >
                    <label htmlFor="email">Email address</label>
                    <Field
                      type="email"
                      placeholder="example@gmail.com"
                      id="email"
                      name="email"
                      className={cx(
                        carterOne.className,
                        "block w-full py-4 md:py-6 px-4 rounded-xl  border border-gray-300 focus:outline-none focus:border-blue-500  placeholder:text-xs md:placeholder:text-xl placeholder:font-light"
                      )}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={cx(carterOne.className, "error text-red-900")}
                    />
                  </div>
                  {/*industry  */}
                  <div
                    className={
                      (cx(carterOne.className), "flex flex-col space-y-3")
                    }
                  >
                    <label htmlFor="industry"> industry</label>
                    <Field name="industry">
                      {({
                        field,
                      }: {
                        field: {
                          name: string;
                          value: any;
                          onChange: (e: any) => void;
                          onBlur: () => void;
                        };
                      }) => (
                        <Select
                          {...field}
                          key="industry-select"
                          onChange={(selectedOption) =>
                            setFieldValue("industry", selectedOption?.value)
                          }
                          options={industryOptions_}
                          value={industryOptions_.find(
                            (option) => option.value === field.value
                          )} // Set the value prop to the selected option
                          placeholder="Select Industry..."
                          // className="h-10 md:h-16"
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              border: "1px solid #ccc",
                              borderRadius: "12px",
                                 height: "40px", // Default height for small devices
                              // Media queries to adjust height based on screen size
                              '@media (min-width: 768px)': {
                                height: "80px", // Set height to 80px for medium and large devices
                              },
                              '@media (min-width: 992px)': {
                                height: "80px", // Set height to 80px for large devices (adjust as needed)
                              },
                              width: "100%", // Customize width as needed
                            }),
                            option: (provided, state) => ({
                              ...provided,
                              backgroundColor: state.isSelected
                                ? "#007bff"
                                : "white", // Change background color of selected option
                              color: state.isSelected ? "white" : "black", // Change text color of selected option
                            }),
                          }}
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="industry"
                      component="div"
                      className={cx(carterOne.className, "error text-red-900")}
                    />
                  </div>
                </div>
                <div className="flex-1 flex-col space-y-8">
                  <div
                    className={cx(
                      carterOne.className,
                      "flex flex-col space-y-3"
                    )}
                  >
                    <label htmlFor="lastName">Last name</label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your lastName"
                      className={cx(
                        carterOne.className,
                        "block w-full py-4 md:py-6 px-8 rounded-xl  border border-gray-300 focus:outline-none focus:border-blue-500  placeholder:text-xs md:placeholder:text-xl placeholder:font-light"
                      )}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className={cx(
                        carterOne.className,
                        "invisible error text-red-900 "
                      )}
                    />
                  </div>
                  <div
                    className={
                      (cx(carterOne.className), "flex flex-col space-y-3")
                    }
                  >
                    <label htmlFor="country">Country</label>
                    <Field name="country">
                      {({
                        field,
                      }: {
                        field: {
                          value: any;
                          onChange: (e: any) => void;
                          onBlur: () => void;
                        };
                      }) => (
                        <Select
                          {...field}
                          key="country-select"
                          onChange={(selectedOption) => {
                            // Update the field value when an option is selected
                            setFieldValue("country", selectedOption?.value);
                          }}
                          options={countryOptions_}
                          value={countryOptions_.find(
                            (option) => option.value === field.value
                          )} // Set the value prop to the selected option
                          placeholder="Select Country..."
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              border: "1px solid #ccc",
                              borderRadius: "12px",
                              height: "40px", // Default height for small devices
                              // Media queries to adjust height based on screen size
                              '@media (min-width: 768px)': {
                                height: "80px", // Set height to 80px for medium and large devices
                              },
                              '@media (min-width: 992px)': {
                                height: "80px", // Set height to 80px for large devices (adjust as needed)
                              },
                              width: "100%", // Customize width as needed
                            }),
                            option: (provided, state) => ({
                              ...provided,
                              backgroundColor: state.isSelected
                                ? "#007bff"
                                : "white",
                              color: state.isSelected ? "white" : "black",
                            }),
                          }}
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className={cx(carterOne.className, "error text-red-900")}
                    />
                  </div>
                  {/*  */}
                  <div
                    className={cx(
                      carterOne.className,
                      "flex flex-col space-y-3"
                    )}
                  >
                    <label htmlFor="Specialization">Specialization</label>
                    <Field
                      type="text"
                      id="specialization"
                      name="specialization"
                      placeholder="Start typing i.e. Product Design.."
                      className={cx(
                        carterOne.className,
                        "block w-full py-4 md:py-6 px-8 rounded-xl  border border-gray-300 focus:outline-none focus:border-blue-500  placeholder:text-xs md:placeholder:text-xl placeholder:font-light"
                      )}
                    />
                    <ErrorMessage
                      name="specialization"
                      component="div"
                      className={cx(
                        carterOne.className,
                        "invisible error text-red-900 "
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full text-center">
                <button
                  type="submit"
                  className="bg-black py-4 md:py-6 px-auto w-full md:w-auto md:px-48 text-white rounded md:rounded-[20px] border border-[#BBBBBB] font-medium text-xs md:text-[18px] disabled:bg-slate-600 disabled:cursor-not-allowed"
                  disabled={
                    ![
                      values.country,
                      values.email,
                      values.industry,
                      values.specialization,
                      values.name,
                      values.lastName,
                    ].every(Boolean)
                  }
                >
                  Submit
                </button>
              </div>
            </Form>
            <img
              data-aos="fade-up-down"
              src="https://res.cloudinary.com/dwqantex4/image/upload/v1714673238/Group_43_jiwbvu.svg"
              alt=""
              className="hidden sm:flex absolute bottom-0 z-0 opacity-20"
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
