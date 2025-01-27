"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IoSend } from "react-icons/io5";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 ">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center text-emerald-500">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-lg text-center mb-12">
          Let&apos;s work together on something amazing
        </p>
        <div className="max-w-md mx-auto bg-gray-800/50 p-8 rounded-lg shadow-xl backdrop-blur-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition duration-300 hover:border-gray-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition duration-300 hover:border-gray-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition duration-300 hover:border-gray-500 resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transform hover:scale-[1.02] transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
            >
              Send Message
              <IoSend className="text-xl" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
