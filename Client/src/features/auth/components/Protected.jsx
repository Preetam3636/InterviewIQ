import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from "react";


const Protected = ({children}) => {
    const { loading, user} = useAuth()

    if (loading) {
    return (
        <main
            style={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#0d1117",
                color: "#fff",
            }}
        >
            <style>{`
                @keyframes loading-bars {
                    0%, 100% {
                        transform: scaleY(0.4);
                        opacity: 0.4;
                    }
                    50% {
                        transform: scaleY(1.4);
                        opacity: 1;
                    }
                }

                @keyframes loading-dots {
                    0%, 20% {
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>

            <div style={{ textAlign: "center" }}>

                {/* Animated bars */}
                <div
                    style={{
                        height: "45px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                        marginBottom: "18px",
                    }}
                >
                    {[...Array(7)].map((_, index) => (
                        <span
                            key={index}
                            style={{
                                width: "5px",
                                height: "24px",
                                borderRadius: "5px",
                                background: "#ff2d78",
                                animation: "loading-bars 1s ease-in-out infinite",
                                animationDelay: `${index * 0.12}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Only text */}
                <div
                    style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        letterSpacing: "1px",
                    }}
                >
                    Loading
                    <span style={{ animation: "loading-dots 1.5s infinite" }}>.</span>
                    <span style={{ animation: "loading-dots 1.5s 0.3s infinite" }}>.</span>
                    <span style={{ animation: "loading-dots 1.5s 0.6s infinite" }}>.</span>
                </div>

            </div>
        </main>
    );
}

    if(!user){
        return <Navigate to={'/login'} />
    }

  return children
}

export default Protected
