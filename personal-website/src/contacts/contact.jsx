export default function Contact() {
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    return (
        <div>
            <h1>Contact Me</h1>
            {serviceId}
        </div>
    )
}