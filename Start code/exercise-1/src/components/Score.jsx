import React from "react";
import Statistic from "./Statistic";

export default function Scores({courseName, courseResults}){

    function checkWarning(score){
        if (score < 50 ){
            return <td class="warning">{score}</td>
        }
        return <td>{score}</td>

    }

    return(
        <>
            <div class="scores">
                <h1>{courseName}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseResults.map(course => (
                            <tr>
                                <td>{course.firstName}</td>
                                <td>{course.lastName}</td>
                                {checkWarning(course.score)}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Statistic courseResults={courseResults}/>
            </div>
        </>
    );
}