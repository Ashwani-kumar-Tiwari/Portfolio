import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_V0f2iH3KFVmrBrKHhsilf";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent Successfully!");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out this form and describe your projects needs
                    and I'll contact you as soon as possible.
                </p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* Name Input */}
                            <div className="text-center">
                                <input
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    {...register("name", {
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 30,
                                            message: "Please enter a name with fewer than 20 character"
                                        }
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message"> {errors.name && errors.name.message} </span>
                            {/* phone Input */}
                            <div className="text-center">
                                <input
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                    {...register("phone", {
                                        required: "Please add your phone number",
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message"> {errors.phone && errors.phone.message} </span>

                            {/* Email Input */}
                            <div className="text-center">
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    {...register("email", {
                                        required: "Please provide your email",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+|.[A-Z]{2,}$/i,
                                            message : "Invalid Email"
                                        }
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message"> {errors.email && errors.email.message} </span>

                            {/* Subject Input */}
                            <div className="text-center">
                                <input
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    {...register("subject", {
                                        required: "OOPS, You forget to add the subject.",
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message"> {errors.subject && errors.subject.message} </span>

                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* Description */}
                            <div className="text-center">
                                <textarea
                                    className="form-control"
                                    placeholder="Description"
                                    name="description"
                                    {...register("description", {
                                        required: "Please describe your project needs",
                                    })}
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message"> {errors.description && errors.description.message} </span>
                            <button
                                className="btn-main-offer contact-btn"
                                type="submit"
                            >Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
