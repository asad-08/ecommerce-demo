import React from "react";

const Contact = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl my-8 text-center">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.264100009696!2d90.4127929742542!3d23.831679838197456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e78f46ee1%3A0x3e009fd37c89634f!2sNikunja%202%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1669827848194!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="flex items-center justify-center my-8">
        <form
          method="POST"
          className="w-full mx-10 md:mx-0 md:w-[500px] flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
            className="border-2 border-teal-800 outline-none px-5 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            autoComplete="off"
            className="border-2 border-teal-800 outline-none px-5 py-2"
          />
          <textarea
            rows={5}
            className="resize-none border-2 border-teal-800 outline-none px-5 py-2"
            placeholder="Message"
          ></textarea>
          <button className="mt-6 text-sm font-semibold uppercase bg-teal-600 hover:bg-teal-800 px-5 py-2 text-slate-100">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
