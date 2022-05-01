import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const shouldRedirect = true
    const navigate = useNavigate()

    React.useEffect(() => {
        if(shouldRedirect) {
            navigate('/Home')
        }
        // supaya tidak looping.
    },[])
  return (
    <>
        <h2>About</h2>
    </>
  );
};

export default About;
