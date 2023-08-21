function countPoints(points: number[][], queries: number[][]): number[] {
    const counts: number[] = [];

    queries.forEach(querie => {
        let [xq, yq, rq] = querie;
        let count: number = 0;

        points.forEach(point => {
        let [xp, yp] = point;
        let distance = Math.sqrt((xq-xp)**2 + (yq-yp)**2);
           
        if (distance <= rq) {
            count ++;
        }         
    })
    
    counts.push(count);
        
    })

    return counts;
};