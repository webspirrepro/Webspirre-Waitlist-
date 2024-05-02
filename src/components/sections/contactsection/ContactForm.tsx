import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { supabase } from "@/config/supabase";
import { Carter_One } from "next/font/google";
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

const carterOne = Carter_One({
  weight: ["400"],
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

      toogleModal();
      // Reset form after 15 seconds
      setTimeout(() => {
        resetForm();
      }, 10000);

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
              name={`${values.name} ${values.lastName}`}
              open={open}
              resetForm={resetForm}
              videoToggle={videoToggle}
            />
            {/* Form Content */}
            <Form
              className="p-2 md:p-20 shadow-xl roundd-sm md:rounded-xl space-y-10 md:space-y-20 w-full bg-white"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row space-y-3 md:space-x-4 w-full justify-center text-xs md:text-xl font-thin">
                <div className="flex-1 flex-col space-y-4 pt-4">
                  <div className={cx(carterOne.className, "flex flex-col")}>
                    <label htmlFor="name">First Name:</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your firstName"
                      className={cx(
                        carterOne.className,
                        "block w-full py-2 md:py-4 px-4 rounded-md  border border-gray-300 focus:outline-none focus:border-blue-500 placeholder:text-xs md:placeholder:text-xl"
                      )}
                    />

                    <ErrorMessage
                      name="name"
                      component="div"
                      className={cx(carterOne.className, "error text-red-900")}
                    />
                    {/* {screenSize} */}
                  </div>

                  <div className={cx(carterOne.className, "flex flex-col")}>
                    <label htmlFor="email">Email:</label>
                    <Field
                      type="email"
                      placeholder="example@gmail.com"
                      id="email"
                      name="email"
                      className={cx(
                        carterOne.className,
                        "block w-full py-2 md:py-4 px-4 rounded-md  border border-gray-300 focus:outline-none focus:border-blue-500  placeholder:text-xs md:placeholder:text-xl"
                      )}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={cx(carterOne.className, "error text-red-900")}
                    />
                  </div>
                  {/*industry  */}
                  <div className={cx(carterOne.className)}>
                    <label htmlFor="industry"> industry:</label>
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
                              borderRadius: "4px",
                              height:
                                screenSize === "Small (SM)" ||
                                screenSize === "Medium (MD)"
                                  ? "40px"
                                  : "60px",
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
                <div className="flex-1 flex-col space-y-4">
                  <div className={cx(carterOne.className, "flex flex-col")}>
                    <label htmlFor="lastName">lastName:</label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your lastName"
                      className={cx(
                        carterOne.className,
                        "block w-full py-2 md:py-4 px-4 rounded-md  border border-gray-300 focus:outline-none focus:border-blue-500  placeholder:text-xs md:placeholder:text-xl placeholder:font-thin"
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
                  <div className={cx(carterOne.className)}>
                    <label htmlFor="country">Country:</label>
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
                          className="h-10 md:h-16"
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              height:
                                screenSize === "Small (SM)" ||
                                screenSize === "Medium (MD)"
                                  ? "40px"
                                  : "60px",
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
                  <div className={cx(carterOne.className)}>
                    <label htmlFor="specialization">Specialization:</label>
                    <Field name="specialization">
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
                          key="specialization-select"
                          onChange={(selectedOption) =>
                            setFieldValue(
                              "specialization",
                              selectedOption?.value
                            )
                          }
                          options={specializationOptions_}
                          value={specializationOptions_.find(
                            (option) => option.value === field.value
                          )} // Set the value prop to the selected option
                          placeholder="Select Specialization..."
                          // className="h-10 md:h-16 border-2 border-gray-300 rounded-md w-full"
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              height:
                                screenSize === "Small (SM)" ||
                                screenSize === "Medium (MD)"
                                  ? "40px"
                                  : "60px",
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
                      name="specialization"
                      component="div"
                      className={cx(carterOne.className, "error text-red-900")}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full text-center">
                <button
                  type="submit"
                  className="bg-black py-2 md:py-4 px-10 md:px-20 text-white rounded-[20px] border border-[#BBBBBB] font-medium text-xs md:text-[18px] disabled:bg-slate-600 disabled:cursor-not-allowed"
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
          </>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
