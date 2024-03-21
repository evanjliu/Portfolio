// Import any react icons using following format:
// import { HiAcademicCap } from "react-icons/hi";

function ContactPage(){
    return (
        <>
        
        <h1>Contact</h1>
        <section id="personal-details">
            <p>Name</p>
            <p>Email</p>
            <p>LinkedIn</p>
            <p>My Resume</p>
        </section>
        <section id="contact-me">
            <form id="contact-form">
                <label for="first-name">First Name</label>
                    <input 
                        type="text"
                        id="first-name"
                        name="first-name"
                        max-length="55"
                        pattern="^[a-zA-Z1-9].*"
                        title="Please do not input leading spaces."
                        required
                        ></input>
                
                <label for="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        max-length="55"
                        pattern="^[a-zA-Z1-9].*"
                        title="Please do not input leading spaces."
                    ></input>

                <label for="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        pattern="^[a-zA-Z1-9].*"
                        max-length="55"
                    ></input>
                
                <label for="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                        max-length="96"
                    ></input>

                <label for="phone">Last Name</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        max-length="55"
                    ></input>    

                <label for="content">Contact</label>
                    <textarea
                        id="content"
                        name="content"
                        required
                        ></textarea>

                <button
                    type="submit"
                    for="submit"
                    id="contact-submit">
                    Submit
                </button>
            </form>
        </section>
        </>
    )
}

export default ContactPage;