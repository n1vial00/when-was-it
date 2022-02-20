import React, {useState, useEffect} from "react";
import axios from "axios";

const API = "http://archive.org/wayback/available?";


export default function Wayback()  {
    const [date, setDate] = useState("");
    const [URL, setURL] = useState("")
    const [website, setWebsite] = useState("google.com")

    useEffect(() => {
        const address = API + "url=" + website;

        axios.get(address)
            .then((response) => {
                let dateRow = response.data.archived_snapshots.closest.timestamp;
                let year = dateRow.slice(0, 4);
                let month = dateRow.slice(4, 6);
                let day = dateRow.slice(6, 8);
                setDate(day + "." + month + "." + year);
                setURL(response.data.archived_snapshots.closest.url);
                setLoading(false);
            }).catch  (error => {
                alert("lol")
            });
}, [])
const [loading, setLoading] = useState(true);


if (loading) {
  return(
    <div className="App">Loading...</div>)
} else {
    
    return (
        <>
        <div> Latest snapshot from { website } was saved { date } </div>
        <div> It can be viewed through { URL } </div>
        </>
    )
    }
}

