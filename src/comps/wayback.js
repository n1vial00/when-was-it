import React, {useState, useEffect} from "react";
import axios from "axios";

const API = "http://archive.org/wayback/available?";


export default function Wayback(props)  {
    const [date, setDate] = useState("");
    const [URL, setURL] = useState("")
    const [loading, setLoading] = useState(true);
    const [expWebsite, setExpWebsite] = useState("google.com");
    const [expTimestamp, setExpTimestamp] = useState("");

    useEffect(() => {
        let tYear = expTimestamp.slice(0,4);
        let tMonth = expTimestamp.slice(5,7);
        let tDay = expTimestamp.slice(8,10);
        let tDate = tYear + tMonth + tDay; 

        let address = API + "url=" + expWebsite + "&timestamp=" +  tDate;

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
                alert("Something went wrong. Please be patient.");
            });
})

    function subHandle(e) {
    e.preventDefault();
    setExpWebsite(props.website);
    setLoading(true);
    setExpTimestamp(props.timestamp);
    }



    if (loading) {
    return(
        <div>Loading...</div>)
    } else {
        
        return (
            <>
            <form onSubmit={subHandle}>
            <button>Get data</button>
            </form>
            <div> Closest snapshot from { expWebsite } was saved { date } </div>
            <div> It can be viewed through </div>
            <div><a href={ URL }>{ URL }</a>  </div>
            </>
        )
        }
}
