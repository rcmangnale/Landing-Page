import { useState } from 'react'


const Pricing = () => {

    const [ monthly, setMonthly ] = useState(true)

    return (
        <div className="pricing ">
            <div className="pricing-header">
                <p className="pricing-title">Pricing & Plans</p>
                <p className="pricing-text">Create custom landing pages with Omega that converts more visitors than any website.</p>
            </div>
            <div className="pricing-switch">
                <p className="pricing-switch-text">Monthly</p>
                <div 
                className={`pricing-switch-toggle ${monthly === true ? null: 'yearly'}`}
                onClick={()=>setMonthly(!monthly)}
                >
                    <div className={`pricing-switch-button ${monthly === true ? null: 'yearly'}`}>
                    </div>
                </div>
                <p className="pricing-switch-text">Yearly</p>
                <div className="pricing-switch-deal">
                    Save 25%
                </div>
            </div>
            <div className="pricing-plans">
                <div className="pricing-plans-box">
                    <div className="pricing-plans-items">
                        <p className="pricing-plans-title">Starter</p>
                        <p className="pricing-plans-amount">19</p>
                        <p className="pricing-plans-text">Per user</p>
                        <p className="pricing-plans-list">5 responsive landing pages</p>
                        <p className="pricing-plans-list">50+ HTML UI elements</p>
                        <p className="pricing-plans-list">Unlimited domains</p>
                        <p className="pricing-plans-list">6 months premium support</p>
                        <p className="pricing-plans-list">Lifetime updates</p>
                    </div>
                    <div className="pricing-plans-below">
                        Start 14 Days Free Trial
                    </div>
                </div>
            </div>
            <div className="pricing-plans">
                <div className="pricing-plans-box">
                    <div className="pricing-plans-items">
                        <p className="pricing-plans-title">Starter</p>
                        <p className="pricing-plans-amount">49</p>
                        <p className="pricing-plans-text">Per user</p>
                        <p className="pricing-plans-list">5 responsive landing pages</p>
                        <p className="pricing-plans-list">50+ HTML UI elements</p>
                        <p className="pricing-plans-list">Unlimited domains</p>
                        <p className="pricing-plans-list">6 months premium support</p>
                        <p className="pricing-plans-list">Lifetime updates</p>
                    </div>
                    <div className="pricing-plans-below">
                        Start 14 Days Free Trial
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing