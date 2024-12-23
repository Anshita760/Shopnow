import "./counter.css"
import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [exp, setExp] = useState(0);
    const [Customer, setCustomer] = useState(0);
    const [Delivery, setDelivery] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setExp(() => {
                const count = exp + 1;
                if (count <= 5) {
                    return count;
                }
                return exp;
            })
        }, 10);
        return () => clearInterval(interval);
    })
    useEffect(() => {
        const interval = setInterval(() => {
            setCustomer(() => {
                const count = Customer + 1;
                if (count <= 100) {
                    return count;
                }
                return Customer;
            })
        }, 5);
        return () => clearInterval(interval);
    })
    useEffect(() => {
        const interval = setInterval(() => {
            setDelivery(() => {
                const count = Delivery + 1;
                if (count <= 200) {
                    return count;
                }
                return Delivery;
            })
        }, 5);
        return () => clearInterval(interval);
    })

    return (
        <>
            {/* <h1>Counter</h1> */}
            <div className="counter-container">
                <div className="count">
                    <h1 className="counter-value">{exp}+</h1>
                    <p>Experience</p>
                </div>
                <div className="count">
                    <h1 className="counter-value">{Customer}+</h1>
                    <p>Happy Customers</p>

                </div>
                <div className="count">
                    <h1 className="counter-value">{Delivery}+</h1>
                    <p>Delivered Products</p>
                </div>
            </div>
        </>
    )
}

export default Counter
