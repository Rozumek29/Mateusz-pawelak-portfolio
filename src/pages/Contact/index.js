import {useEffect} from "react";

const Contact = () => {

    useEffect(() => {
        document.title = "Mateusz Pawelak | Contact";
    }, []);


    return (
        <div>
            <h1>No tu też nic nie ma -.-</h1>
            <h3>Co ty myślisz że ja motorek w dupie mam ?</h3>
        </div>
    )
}

export default Contact;