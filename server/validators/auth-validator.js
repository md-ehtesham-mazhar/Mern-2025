const { z } = require("zod");

//creating object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 chars" })
    .max(255, { message: "Name must not be more than 255 chars" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email" })
    .min(3, { message: "email must be atleast of 3 chars" })
    .max(255, { message: "email must not be more than 255 chars" }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "phone must be atleast of 10 chars" })
    .max(20, { message: "phone must not be more than 20 chars" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(7, { message: "password must be atleast of 7 chars" })
    .max(1024, { message: "password must not be more than 1024 chars" }),
});

const loginSchema = z.object({

    email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email" })
    .min(3, { message: "email must be atleast of 3 chars" })
    .max(255, { message: "email must not be more than 255 chars" }),

    password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(7, { message: "password must be atleast of 7 chars" })
    .max(1024, { message: "password must not be more than 1024 chars" }),

});

module.exports = {signupSchema, loginSchema};
