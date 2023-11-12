import React, { useState, useEffect } from "react";

export default function BugsTest(props) {
    const [names, setNames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/data.json').then(response => response.json());
                setNames(data);
        };
        fetchData();
    }, []);

    return (<>
        <h2>🪲 Bug Fixes</h2>
        <p>
            Please address the following issues in the <code>/gatsby/components/BugsTest</code> component file. 
            You can zip up just that file or the whole project code and send it back once completed.
        </p>
        
        <ul>
            <li>(React Bug) - This file pulls information from a JSON file, it&apos;s currently pulling multiple times, correct the code so this happens once per page load.</li>
            <li>(React Bug) - The Employee table should list out all the first names and last initials from the <code>data.json</code> file, the names are not appearing, fix this so the names appear.</li>
            <li>(Styles Fix) - Modify the file so that the &quot;Test SVG&quot; Image color so is blue <code>#038cfc</code> using css only.</li>
        </ul>
        
        <hr />

        <h2>Employee Table</h2>
        <table>
            <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                </tr>
            </thead>
            <tbody>
                {names?.data?.map((n, index) => 
                    <tr key={index}>
                        <td>{n?.first}</td>
                        <td>{n?.last}</td>
                    </tr>
                )}
            </tbody>
        </table>
        <br /><br />
        <hr />
        <h2>Test SVG</h2>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
        </div>
    </>);
}