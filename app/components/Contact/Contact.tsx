import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    return (
        <div id="contact">
            <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-3xl bg-white shadow-xl border border-grey500 p-8 lg:p-12">
                    <div>
                        <h3 className="text-4xl lg:text-5xl font-semibold text-navyblue">Let&apos;s Talk</h3>
                        <p className="text-lg text-gray-600 mt-4">
                            Have a project in mind or need help clarifying your next steps? Reach out and we&apos;ll talk through your goals.
                        </p>

                        <div className="mt-10">
                            <h4 className="text-xl font-semibold text-navyblue">Email</h4>
                            <div className="mt-4 flex items-center gap-4">
                                <div className="bg-lightblue h-12 w-12 rounded-full flex items-center justify-center shrink-0">
                                    <Image src="/assets/footer/email.svg" alt="email icon" width={20} height={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Mail</p>
                                    <a href="mailto:info@gmail.com" className="text-blue font-medium">info@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h4 className="text-xl font-semibold text-navyblue">Socials</h4>
                            <div className="mt-4 flex gap-4">
                                <Link href="https://facebook.com" className="bg-lightblue h-12 w-12 rounded-full flex items-center justify-center transition-colors hover:bg-blue">
                                    <Image src="/assets/footer/facebook.svg" alt="facebook" width={18} height={18} />
                                </Link>
                                <Link href="https://twitter.com" className="bg-lightblue h-12 w-12 rounded-full flex items-center justify-center transition-colors hover:bg-blue">
                                    <Image src="/assets/footer/twitter.svg" alt="twitter" width={18} height={18} />
                                </Link>
                                <Link href="https://instagram.com" className="bg-lightblue h-12 w-12 rounded-full flex items-center justify-center transition-colors hover:bg-blue">
                                    <Image src="/assets/footer/instagram.svg" alt="instagram" width={18} height={18} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-lg py-3 px-4 border border-lightgrey text-sm text-navyblue placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-lg py-3 px-4 border border-lightgrey text-sm text-navyblue placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full rounded-lg py-3 px-4 border border-lightgrey text-sm text-navyblue placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue"
                        />
                        <textarea
                            placeholder="Message"
                            rows={6}
                            className="w-full rounded-lg px-4 border border-lightgrey text-sm text-navyblue placeholder:text-gray-400 pt-3 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue"
                        ></textarea>
                        <button
                            type="button"
                            className="w-full bg-blue text-white font-medium py-3 px-6 rounded-lg leafbutton"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
