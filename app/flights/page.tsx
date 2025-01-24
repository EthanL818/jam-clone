"use client";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaPlane } from "react-icons/fa";

function Flights() {
    const [showDetails, setShowDetails] = useState(false); // State to toggle details

    const headerStyle: React.CSSProperties = {
        position: "relative",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
        height: "400px",
    };

    const headerImageStyle: React.CSSProperties = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.5,
        zIndex: -1,
        borderRadius: "12px",
    };

    const titleStyle: React.CSSProperties = {
        position: "absolute",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "clamp(3rem, 5vw, 5rem)", 
        fontWeight: "bold",
        margin: "0",
        letterSpacing: "2px",
        color: "#1A143D",
    };

    const titleBanner: React.CSSProperties = {
        background: "linear-gradient(to right, #1A143D, #CD0B11)",
        padding: "10px 20px",
        borderRadius: "8px",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "1.8rem",
        fontWeight: "bold",
        margin: "20px auto",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    };

    const textBlockStyle: React.CSSProperties = {
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "clamp(1rem, 2.5vw, 1.25rem)", 
        color: "#000",
        fontWeight: "bold",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "10px 20px",
        borderRadius: "8px",
        width: "100%",
        textAlign: "center",
        maxWidth: "90%", // Restrict width for smaller screens
        boxSizing: "border-box",
    };

    const container: React.CSSProperties = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "40px",
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "0 20px", 
    };

    const leftContent: React.CSSProperties = {
        flex: "1",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        boxSizing: "border-box",
        margin: "0", 
    };

    const rightContent: React.CSSProperties = {
        flex: "1",
        backgroundColor: "#d33",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        margin: "0",
    }; 
    const responsiveStyles = `
        @media (max-width: 768px) {
            .content-container {
            flex-direction: column;
            gap: 20px;
            padding: 0 10px; /* Reduce padding for mobile */
            }
            .left-content,
            .right-content {
            width: 100%; /* Full width for both blocks */
            margin: 0; /* Ensure no extra margin */
            }
        }
        `;

    const cardTitle: React.CSSProperties = {
        fontSize: "2.5rem", 
        fontWeight: "bold",
        marginBottom: "10px",
        marginTop: "15px",
        textAlign: "center",
    };

    const cardPrice: React.CSSProperties = {
        fontSize: "1.8rem", 
        fontWeight: "bold",
        textAlign: "center",
        color: "#FFD700", 
    };

    const cardSubtitle: React.CSSProperties = {
        textAlign: "center",
        fontSize: "1rem",
        marginBottom: "20px",
        fontStyle: "italic",
    };

    const button: React.CSSProperties = {
        backgroundColor: "#FFD700",
        color: "#d33",
        padding: "12px 24px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        margin: "0 auto",
    };

    const toggleDetails: React.CSSProperties = {
        color: "#fff",
        textDecoration: "underline",
        marginTop: "20px",
        cursor: "pointer",
        textAlign: "center",
    };

    const details: React.CSSProperties = {
        marginTop: "20px",
        textAlign: "left",
        lineHeight: "1.8",
    };

    const imgStyle: React.CSSProperties = {
        width: "100%",
        height: "auto",
        borderRadius: "12px",
        marginTop: "20px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    };

    const footerStyle: React.CSSProperties = {
        backgroundColor: "#f9f9f9",
        color: "#333",
        textAlign: "center",
        padding: "40px 20px",
        marginTop: "40px",
        borderTop: "4px solid #CD0B11",
        fontSize: "1rem",
    };
const titleStyleWithUnderline: React.CSSProperties = {
    fontSize: "2rem", 
    fontWeight: "bold",
    color: "#C8102E", 
    marginBottom: "10px", 
    textAlign: "center",
    position: "relative",
    display: "inline-block",
};

const underlineStyle: React.CSSProperties = {
    content: '""',
    display: "block",
    width: "60%", 
    height: "2px", 
    backgroundColor: "#C8102E", 
    margin: "0 auto", 
    marginTop: "5px", // Adds spacing between the title and underline
};

    return (
        <div>
            {/* Header Section */}
            <style>{responsiveStyles}</style>
            <header style={headerStyle}>
                <img src="/images/pics/rk-snowbirds.jpg" alt="Header Background" style={headerImageStyle} />
                <h1 style={titleStyle}>FLY WITH US</h1>
                <div style={textBlockStyle}>
                    <p>
                        Would you like to fly in a vintage military jet training aircraft? <br />
                        Well here is your opportunity!
                    </p>
                    <p>**JAM membership is included in your flight fees.**</p>
                </div>
            </header>

            {/* Booking Section */}
            <section>
            
                <div style={container}>
                    {/* Left Content */}
                    <div style={leftContent}>
                    <h2 style={titleBanner}>
                    <FaPlane /> Canadair CT-133 - 'Red Knight'
                </h2>
                        <p style={{ lineHeight: "1.8", fontSize: "1.2rem", marginBottom: "20px", color: "#333" }}>
                            The <strong>Red Knight</strong> was a Canadian air force aerobatic display aircraft that
                            operated from 1958 to 1969. The Red Knight performed at airshows around North America, often appearing as an opening act for or in conjunction with the {" "}
                            <span style={{ color: "#d33", fontWeight: "bold" }}>Golden Hawks</span> display team and later the {" "}
                            <span style={{ color: "#d33", fontWeight: "bold" }}>Golden Centennaires</span>
                             , Canada's contemporary aerobatic teams. The JAM CT-133, painted in the Red Knight livery, still flys at air shows and is available for member flights. Check the JAM Events page for performance and flight dates.
                        </p>
                        <img
                            src="/images/pics/RedKnightFlight.jpg"
                            alt="Red Knight Flight"
                            style={imgStyle}
                        />
                    </div>

                    {/* Right Content */}
                    <div style={rightContent}>
                    <h4 style={cardTitle}>Book A Flight</h4>
                    <p style={cardPrice}>$3500 CAD</p>
                        <p style={cardSubtitle}>Exclusively for the Canadair CT-133 - 'Red Knight'</p>
                        <form
                            action="https://www.paypal.com/cgi-bin/webscr"
                            method="post"
                            target="_blank"
                            style={{ textAlign: "center" }}
                        >
                            <input type="hidden" name="cmd" value="_xclick" />
                            <input type="hidden" name="business" value="accounting@jetaircraftmuseum.ca" />
                            <input type="hidden" name="item_name" value="Canadair CT-133 - 'Red Knight' Flight" />
                            <input type="hidden" name="amount" value="3500.00" />
                            <input type="hidden" name="currency_code" value="CAD" />
                            <input type="hidden" name="button_subtype" value="services" />
                            <input type="hidden" name="no_note" value="0" />
                            <input
                                type="hidden"
                                name="bn"
                                value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"
                            />
                            <button
                                type="submit"
                                style={button}
                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                Pay Now with Paypal
                            </button>
                        </form>
                        <br />
                        <p style={{ textAlign: "center", fontSize: "1rem", marginBottom: "20px", fontStyle: "normal" }}>
                            Or, E-Transfer to 'accounting@jetaircraftmuseum.ca'
                        </p>

                        <p style={toggleDetails} onClick={() => setShowDetails(!showDetails)}>
                            {showDetails ? "Hide Details" : "View Steps After Payment"}
                        </p>
                        {showDetails && (
                            <div style={details}>
                               <p>
                                1. Email <b>your full name, email, and phone number</b> to:
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                                        <FaEnvelope />
                                        <a
                                        href="mailto:accounting@jetaircraftmuseum.ca"
                                        style={{ color: "#FFD700", fontWeight: "bold" }}
                                        >
                                        accounting@jetaircraftmuseum.ca
                                        </a>
                                    </span>
                                </p>

                                <p>
                                2. Book your Training Session and Flight by contacting:
                                <br />
                                    {" "}
                                    <a
                                        href="mailto:flightops@jetaircraftmuseum.ca"
                                        style={{ color: "#FFD700", fontWeight: "bold" }}
                                    >
                                        flightops@jetaircraftmuseum.ca
                                    </a>{" "}
                                    or call 
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                                        <FaPhoneAlt />
                                        <a
                                        href="tel:5194537000"
                                        style={{ color: "#FFD700", fontWeight: "bold" }}
                                        >
                                        519-453-7000
                                        </a>
                                    </span>
                                </p>

                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer style={footerStyle}>
                <h3 style={{ fontSize: "2rem", color: "#d33" }}>Ground Schools</h3>
                <p>Info Coming Soon!</p>
            </footer>
        </div>
    );
}

export default Flights;
