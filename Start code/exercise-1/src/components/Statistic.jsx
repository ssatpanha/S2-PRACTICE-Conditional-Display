

export default function Statistic({courseResults}){
 
    let min = courseResults[0].score;
    let max = courseResults[0].score;
    let average = 0;
    courseResults.map(element => {
        average+= element.score
        if ( min > element.score) min = element.score ;
        if ( max < element.score) max = element.score ;
    });

    average =  average / courseResults.length;

    return(
        <>
            <div>
                <table className="scores">
                    <thead>
                        <tr>
                            <th>AVERAGE</th>
                            <th>MIN</th>
                            <th>MAX</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{average.toFixed(2)}</td>
                            <td>{min}</td>
                            <td>{max}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        </>
    );
}