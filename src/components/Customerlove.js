import CustomerImage from "./Customerimage"


const Customerlove = () => {
    return (
        <div className="testimonial">
            <div className="testimonial-header">
                <p className="testimonial-title">Customers love us</p>
                <p className="testimonial-text">Create custom landing pages with Omega that converts more visitors than any website.</p>
            </div>
            <div className="testimonial-card">
                <CustomerImage></CustomerImage>
            </div>
            <div className="testimonial-fact">
                <div className="testimonial-fact-box">
                    <p className="testimonial-fact-title">1M+</p>
                    <p className="testimonial-fact-text">Customers visit Omega every month to get their service done.</p>
                </div>
                <div className="testimonial-fact-box">
                    <p className="testimonial-fact-title">92%</p>
                    <p className="testimonial-fact-text">Satisfaction rate comes from our awesome customers.</p>
                </div>
                <div className="testimonial-fact-box">
                    <p className="testimonial-fact-title">4.9/5.0</p>
                    <p className="testimonial-fact-text">Average customer ratings we have got all over internet.</p>
                </div>
            </div>
        </div>
    )
}

export default Customerlove