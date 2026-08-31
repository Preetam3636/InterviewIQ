import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const {loading, handleRegister} = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({username,email,password})
        navigate("/")
    }

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

  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
            
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input 
                onChange={(e) =>{ setUsername(e.target.value) }}
                type="text" id="username"  name='username' placeholder='Enter username' />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                onChange={(e) =>{ setEmail(e.target.value) }}
                type="email" id="email"  name='email' placeholder='Enter email address' />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                onChange={(e) =>{ setPassword(e.target.value) }} 
                type="password" id="password"  name='password' placeholder='Enter password' />
            </div>

            <button className='button primary-button'>Register</button>

            </form>

            <p>Already have an account? <Link to={"/login"}>Login</Link></p>
        </div>
    </main>
  )
}

export default Register
