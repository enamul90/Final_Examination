

const ContactForm = () => {
    return (
        <div className="contact-form container py-5 ">

            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type={"text"} className="form-control"
                       placeholder="Md Enamul Firoz "/>
            </div>
            <div className="mb-3">
                <label className="form-label">E - Mail</label>
                <input type={"email"} className="form-control"
                       placeholder="email@mail.com"/>
            </div>
            <div className="mb-4">
                <label className="form-label">Example textarea</label>
                <textarea className="form-control"  rows="3" placeholder={"Typer Your Observation"}></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

        </div>
    );
};

export default ContactForm;