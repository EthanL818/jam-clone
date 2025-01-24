"use client";

import React, { useState, useEffect } from "react";
import { FaPlane } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slideshow Component
const Slideshow = ({ items }: { items: { image: string; title: string; description: string }[] }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                    style={{
                        width: "80%", // Use percentage for width
                        maxWidth: "500px", // Max constraint for large screens
                        height: "auto", 
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                        margin: "0 auto", // Center the image horizontally
                        display: "block", // Ensure the image respects the margin
                    }}
                />
                {/* Title */}
            <h2
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)", 
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#C8102E",
              }}
            >
              {item.title}
            </h2>
                <p style={{fontSize: "clamp(0.8rem, 2vw, 1rem)", marginTop: "10px" , fontWeight: "bold" }}>{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      );
    };

    const getDynamicStyle = (activeSection: string | null, section: string): React.CSSProperties => {
      const baseStyle: React.CSSProperties = {
        zIndex: 3, // titles are above other elements
        position: "absolute", // Necessary for precise positioning
        transition: "color 0.3s ease, top 0.3s ease, left 0.3s ease, right 0.3s ease",
      };
    
      if (!activeSection) {
        // Default positions
        if (section === "ourAircrafts") return { ...baseStyle, top: "10%", left: "5%" }; // Top-left
        if (section === "ourRestorations") return { ...baseStyle, top: "40%", right: "5%" }; // Middle-right
        if (section === "aircraftsWanted") return { ...baseStyle, bottom: "10%", left: "5%" }; // Bottom-left
      }
    
      if (activeSection === section) {
        if (section === "ourRestorations") {
          return { ...baseStyle, top: "10%", right: "5%", zIndex: 2 };
        }
        return { ...baseStyle, top: "10%", left: "5%", zIndex: 2 };
      }
    
      return { display: "none" }; // Hide inactive titles
    };
    
    const sectionContainerStyle: React.CSSProperties = {
      position: "relative",
      height: "100vh", // Set height to match the background image
      width: "100%",
      overflow: "hidden", // Prevent content overflow
      marginBottom: "20px", // Add spacing between sections
      zIndex: 1, // the grid is on top
    };
    
    const slideshowContainerStyle: React.CSSProperties = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", // Center the slideshow
      width: "80%",
      maxWidth: "600px", // Constrain the maximum width
      zIndex: 2,
      pointerEvents: "auto",
    };
    
    const gridSectionStyle: React.CSSProperties = {
      position: "relative",
      marginTop: "30px", // Add margin to separate from the slideshow section
    };

    const backgroundImageStyle: React.CSSProperties = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "url('/images/pics/rk-cf188.jpg')",  
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.3, 
      zIndex: -1,
      borderRadius: "12px", 
    };

    const titleContainerStyle: React.CSSProperties = {
      position: "relative",
      width: "100%",
      height: "100%",
      zIndex: 3,
    };

    const titleStyle: React.CSSProperties = {
      position: "relative",
      display: "flex",
      alignItems: "center",
      textAlign: "center", 
      margin: "0 auto 20px", 
      width: "fit-content",
      fontSize: "2rem", 
      fontWeight: "bold",
      color: "#1A143D",
      zIndex: 3,
      borderBottom: "3px solid #1A143D",
      paddingBottom: "5px",
      gap: "10px",
      cursor: "pointer",
      transition: "color 0.3s ease",
    };

    const responsiveSlideshowStyle = `
      @media (max-width: 768px) {
        .slideshow-container {
          top: 75%; // Adjust for smaller screens
          width: 90%; // Take more space on mobile
        }
      }`
    ;
    const slideshowStyle: React.CSSProperties = {
      width: "90%", // Allow more space on mobile
      margin: "0 auto",
      maxWidth: "600px", 
    };

    const responsiveContainerStyle: React.CSSProperties = {
      padding: "20px",
    };

    const mobilePadding = `
      @media (max-width: 768px) {
        padding: 10px; /* Reduce padding on smaller screens */
      }`
    ;
      
      const titleStyleTopLeft: React.CSSProperties = {
        top: "10%",
        left: "5%",
      };
      
      const titleStyleMiddleRight: React.CSSProperties = {
        top: "40%",
        right: "5%",
      };
  
      const titleStyleBottomLeft: React.CSSProperties = {
        bottom: "10%",
        left: "5%",
      };

      const carouselContainerStyle: React.CSSProperties = {
        marginTop: "20px",
      };
      const containerStyle: React.CSSProperties = {
        maxWidth: "1200px", // Limit maximum width for larger screens
        margin: "0 auto", // Center the container
        padding: "0 20px", // Add some padding for smaller screens
      };

      const imageGridStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // Default 3 columns
        gap: "10px",
        justifyContent: "center",
        padding: "10px",
      };

      const imageStyle: React.CSSProperties = {
        width: "100%", // Fill the grid cell
        height: "200px", // Fixed height for consistency
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Add shadow
        objectFit: "cover", 
      };

      const wrapperStyle: React.CSSProperties = {
        margin: "0 auto",
        padding: "20px",
        maxWidth: "1200px",
      };

      const modalOverlayStyle: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Black transparent background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // Ensure it appears above everything
      };
  
      const modalImageStyle: React.CSSProperties = {
        maxWidth: "90%", // Adjust modal size for smaller screens
        maxHeight: "80%", // Ensure it doesn't overflow vertically
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
      };
        
      const specificImageStyle: React.CSSProperties = {
          ...imageStyle,
          objectPosition: "center top", // Shifts the image upward to crop more of the bottom
        };
  
      const CollectionClient = () => {
        const [activeSection, setActiveSection] = useState<string | null>(null);
        const [hoveredSection, setHoveredSection] = useState<string | null>(null);
        const [selectedImage, setSelectedImage] = useState<string | null>(null);

        const closeModal = () => setSelectedImage(null);

        const aircraftSlides = [
            {
              image: "/images/pics/redKnightOurCollection.jpg",
              title: 'Canadair CT-133 Silverstar "Red Knight" C-FUPP',
              description: "The Red Knight was a Canadian air force aerobatic display aircraft that operated from 1958 to 1969. The red-painted Silver Star performed loops, rolls, Cuban 8s, horizontal 360s, inverted flight, and high speed passes at airshows around North America, often appearing as an opening act for or in conjunction with the Golden Hawks display team and later the Canadian Armed Forces Golden Centennaires, Canada's contemporary aerobatic teams. The Silver Star was replaced by the Tutor CT-114 in July 1968. 6 ex-Canadian Forces CT-133 aircraft were acquired from Crown Assets Distribution in 2008.",
            },
            {
              image: "/images/pics/voodooourcollection.jpg",
              title: "McDonnell CF-101 Voodoo 101006",
              description: "The McDonnell CF-101 Voodoo was an all-weather interceptor aircraft operated by the Royal Canadian Air Force and the Canadian Forces between 1961 and 1984. They were manufactured by the McDonnell Aircraft Corporation of St. Louis, Missouri for the United States Air Force (as F-101s), and later sold to Canada. CF-101s replaced the obsolete Avro CF-100 Canuck in the RCAF's all-weather fighter squadrons. The CF-101 served as Canada's primary means of air defence from Quick Reaction Alert facilities at Canadian airbases. The CF-101s were retired in the 1980s and replaced with McDonnell Douglas CF-18 Hornet fighters.",
            },
            {
                image: "/images/pics/c-fupoourcollection.jpg",
                title: "Canadair CT-133 Silverstar C-FUPO",
                description: "The Canadair CT-133 Silver Star (company model number CL-30) is the Canadian license-built version of the Lockheed T-33 jet trainer aircraft, in service from the 1950s to 2005. The Canadian version was powered by the Rolls-Royce Nene 10 turbojet, whereas the Lockheed production used the Allison J33.",
              },
              {
                image: "/images/pics/542.jpg",
                title: "CT-133 Silverstar 133542",
                description: "The Canadair CT-133 Silver Star is the Canadian license-built version of the Lockheed T-33 jet trainer aircraft, in service from the 1950s to 2005. The Canadian version was powered by the Rolls-Royce Nene 10 turbojet, whereas the Lockheed production used the Allison J33.",
              },
          ];
          
          const restorationSlides = [
            {
              image: "/images/pics/vampire.jpg", 
              title: "De Havilland Vampire",
              description:
                "History Of Our De Havilland Vampire: A79-657(N1933) was built in Sydney Australia in 1952 under license from de Havilland Air Craft. It was known as a T35 or DH115. It was powered by a Goblin turbo jet engine and was a 2 seater. The first Vampire version was a single seater powered by a Rolls Royce Nene. RAAF used the T35 2 seater from 1952 til 1970. It was used as a trainer there. 1970 it was bought & moved to Broomfield CO, USA. 1974 it was bought by Bradley Aircraft Museum in Hartford Connecticut. 1984 it was bought by New England museum. In 1989 it ended up in Alberta Canada. And now it lives with us in London, Ontario.",
            },
            {
              image: "/images/pics/ct114tutorourcollection.jpg",
              title: "Canadair CT-114 Tutor",
              description: "The Canadair CT-114 Tutor (company model CL-41) was the Royal Canadian Air Force (RCAF), and later Canadian Forces, standard jet trainer between the early 1960s and 2000. It was designed and produced by Canadian aircraft manufacturer Canadair. The RCAF would be the dominant user of the type, but a limited number were exported as well. Specifically, the CL-41G model, which was supplied to the Royal Malaysian Air Force (RMAF), served as a ground-attack aircraft up until its withdrawal. The Tutor served as the Canadian Forces primary jet trainer until it was finally retired from this role, being replaced by a combination of the newer British-built CT-155 Hawk and American-built CT-156 Harvard II. The CT-114 Tutor is the aircraft flown by the Canadian Forces Snowbirds aerobatics team.",
            },
          ];
          
          const wantedSlides = [
            {
              image: "/images/pics/cf-104.jpg",
              title: "Canadair CF-104 Starfighter",
              description: "The Canadair CF-104 Starfighter (CF-111, CL-90) was a modified version of the Lockheed F-104 Starfighter supersonic fighter aircraft built in Canada by Canadair under licence. It was primarily used as a ground attack aircraft, despite being designed as an interceptor. It served with the Royal Canadian Air Force(RCAF) and later the Canadian Armed Forces (CAF) until it was replaced by the McDonnell Douglas CF-18 Hornet.",
            },
            {
              image: "/images/pics/CF-5.jpg",
              title: "CF-5 Freedom Fighter",
              description: "The Canadair CF-5 (officially designated the CF-116 Freedom Fighter) is a Canadian license-built Northrop F5 Freedom Fighter, a light, supersonic, twin engine, daylight air superiority fighter primarily for the ROyal Canadian Air Force",
            },
            {
                image: "/images/pics/canuck.jpg",
                title: "Avro C-100 Canuck",
                description: 'The Avro Canada CF-100 Canuck (affectionately known as the "Clunk") was a Canadian twinjet interceptor/fighter serving during the Cold War at NATObases in Europe, and as part of NORAD. The CF-100 was the only Canadian-designed fighter to enter mass production, serving primarily with the Royal Canadian Air Force and Canadian Armed Forces and also in small numbers in Belgium. For its day, the CF-100 featured a short takeoff run and high climb rate, making it well suited to its role as an interceptor.',
              },
              {
                image: "/images/pics/sabre.jpg",
                title: "Canadair CL-13/CF-86 Sabre",
                description: "The Canadair Sabre was a jet fighter aircraft built by Canadair under licence from North American Aviation. A variant of the North American F-86 Sabre, it was produced until 1958 and used primarily by the Royal Canadian Air Force (RCAF) until replaced with the Canadair CF-104 in 1962. Several other air forces also operated the aircraft.",
              },
              {
                image: "/images/pics/cf_18.jpg",
                title: "CF-18 Hornet",
                description: "The McDonnell Douglas CF-18 Hornet (official military designation CF-188) is a Royal Canadian Air Force (RCAF) variant of the American McDonell Douglas F-18 Hornet fighter aircraft.",
              },
          ];
      
        const getSlideshowPosition = () => {
          if (activeSection === "ourAircrafts") return { top: "15%", left: "5%" };
          if (activeSection === "ourRestorations") return { top: "45%", left: "5%" };
          if (activeSection === "aircraftsWanted") return { top: "75%", left: "5%" };
          return {};
        };
    
    return (
      <div style={containerStyle}>
        <div style={sectionContainerStyle}>
          {/* Background Image */}
          <div style={backgroundImageStyle}></div>
  
          {/* Slideshow Rendering */}
          {activeSection && (
            <div style={slideshowContainerStyle}>
              {activeSection === "ourAircrafts" && <Slideshow items={aircraftSlides} />}
              {activeSection === "ourRestorations" && <Slideshow items={restorationSlides} />}
              {activeSection === "aircraftsWanted" && <Slideshow items={wantedSlides} />}
            </div>
          )}
  
          {/* Titles */}
          <div>
            <div
              style={{
                ...titleStyle,
                ...getDynamicStyle(activeSection, "ourAircrafts"),
                color: hoveredSection === "ourAircrafts" || activeSection === "ourAircrafts" ? "#C8102E" : "#1A143D",
                transition: "color 0.3s ease, top 0.3s ease, left 0.3s ease",
              }}
              onClick={() =>
                setActiveSection(activeSection === "ourAircrafts" ? null : "ourAircrafts")
              }
              onMouseEnter={() => setHoveredSection("ourAircrafts")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <span>Our Aircraft</span>
              <FaPlane
                style={{
                  transition: "transform 0.3s ease",
                  transform:
                    hoveredSection === "ourAircrafts"
                      ? "rotate(360deg)" // Rotate fully on hover
                      : activeSection === "ourAircrafts"
                      ? "rotate(90deg)" // Rotate partially when active
                      : "rotate(0deg)", // Default state
                }}
              />
            </div>
  
            <div
              style={{
                ...titleStyle,
                ...getDynamicStyle(activeSection, "ourRestorations"),
                color: hoveredSection === "ourRestorations" || activeSection === "ourRestorations" ? "#C8102E" : "#1A143D",
                transition: "color 0.3s ease, top 0.3s ease, left 0.3s ease",
              }}
              onClick={() =>
                setActiveSection(activeSection === "ourRestorations" ? null : "ourRestorations")
              }
              onMouseEnter={() => setHoveredSection("ourRestorations")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <span>Our Restorations</span>
              <FaPlane
                style={{
                  transition: "transform 0.3s ease",
                  transform:
                    hoveredSection === "ourRestorations"
                      ? "rotate(360deg)" // Rotate fully on hover
                      : activeSection === "ourRestorations"
                      ? "rotate(90deg)" // Rotate partially when active
                      : "rotate(0deg)", // Default state
                }}
              />
            </div>
  
            <div
              style={{
                ...titleStyle,
                ...getDynamicStyle(activeSection, "aircraftsWanted"),
                color: hoveredSection === "aircraftsWanted" || activeSection === "aircraftsWanted" ? "#C8102E" : "#1A143D",
                transition: "color 0.3s ease, top 0.3s ease, left 0.3s ease",
              }}
              onClick={() =>
                setActiveSection(activeSection === "aircraftsWanted" ? null : "aircraftsWanted")
              }
              onMouseEnter={() => setHoveredSection("aircraftsWanted")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <span>Aircrafts Wanted</span>
              <FaPlane
                style={{
                  transition: "transform 0.3s ease",
                  transform:
                    hoveredSection === "aircraftsWanted"
                      ? "rotate(360deg)" // Rotate fully on hover
                      : activeSection === "aircraftsWanted"
                      ? "rotate(90deg)" // Rotate partially when active
                      : "rotate(0deg)", // Default state
                }}
              />
            </div>
          </div>
        </div>
  
        {/* Artifacts and Collection Section */}
        <div style={{ marginTop: "80px", textAlign: "center" }}>
          {/* Title Container */}
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                width: "100%",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(2rem, 3vw, 3.5rem)",
                  fontWeight: "bold",
                  color: "#C8102E",
                  margin: "0",
                }}
              >
                Artifacts&nbsp;Collection
              </h1>
            </div>
  
          <p
            style={{
              fontSize: "1.2rem",
              color: "#000",
              marginTop: "20px",
              width: "80%",
              margin: "0px auto",
              textAlign: "center",
              lineHeight: "1.6",
            }}
          >
            We have a vast collection of Military Artifacts, Documents, and Aviation-related items. Below is just a sample
            of them.
          </p>
        </div>
  

<div style={gridSectionStyle}>
  <div className="image-grid" style={imageGridStyle}>

  <img
    src="/images/pics/UniformsAndMotorcycle.jpg"
    alt="Uniforms and Motorcycle"
    style={imageStyle}
    onClick={() => setSelectedImage("/images/pics/UniformsAndMotorcycle.jpg")}
  />
  <img
    src="/images/pics/Uniforms2.jpg"
    alt="Uniforms"
    style={specificImageStyle}
    onClick={() => setSelectedImage("/images/pics/Uniforms2.jpg")}
  />
  <img src="/images/pics/AIM4.jpg" alt="AIM4" style={imageStyle} onClick={() => setSelectedImage("/images/pics/AIM4.jpg")} />
  <img src="/images/pics/Uniforms1.jpg" alt="Uniforms 1" style={imageStyle} onClick={() => setSelectedImage("/images/pics/Uniforms1.jpg")}/>
  <img src="/images/pics/EjectionSeat.jpg" alt="Ejection Seat" style={imageStyle} onClick={() => setSelectedImage("/images/pics/EjectionSeat.jpg")} />
  <img src="/images/pics/Models1.jpg" alt="Models 1" style={imageStyle} onClick={() => setSelectedImage("/images/pics/Models1.jpg")}/>
  <img src="/images/pics/Models2.jpg" alt="Models 2" style={imageStyle} onClick={() => setSelectedImage("/images/pics/Models2.jpg")}/>
  <img src="/images/pics/BadgesAndBooks.jpg" alt="Badges and Books" style={imageStyle} onClick={() => setSelectedImage("/images/pics/BadgesAndBooks.jpg")}/>
  <img src="/images/pics/AvroDraftTable.jpg" alt="Avro Draft Table" style={imageStyle} onClick={() => setSelectedImage("/images/pics/AvroDraftTable.jpg" )}/>
</div>

{selectedImage && (
  <div style={modalOverlayStyle} onClick={closeModal}>
    <img src={selectedImage} alt="Enlarged" style={modalImageStyle} />
  </div>
)}
</div>
<style jsx>{`
        @media (max-width: 768px) {
          div {
            flex-direction: column;
            text-align: center;
          }
          .line-divider {
            display: none;
          }
        }`
      }</style>
</div>
  );
};

export default CollectionClient;