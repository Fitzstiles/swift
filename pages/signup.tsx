import Link from "next/link";

const Signup = () => {
    return (
        <div className="container">
            <div className="left__container">
                <h1>Welcome Back</h1>
                <p>Please type in your details</p>

                <form action="#">
                    <div>
                        <h3>First Name</h3>
                        <input type="text" placeholder="Enter your name" required />
                    </div>
                    <div>
                        <h3>Last Name</h3>
                        <input type="text" placeholder="Enter your name" required />
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                </form>

                <section className="right__section">
                    <Link href="/">Forgot password</Link>
                </section>

                <div className="signup">
                    <Link
                        href="/dashboard"
                        className="text-sm text-red-600 underline hover:text-purple-400"
                    >
                        Get started
                    </Link>
                </div>
            </div>
            <div className="right__container">
                <div className="animations_container">
                    <h2>Animations goes heres</h2>
                </div>
            </div>
        </div>
    );
};

export default Signup;