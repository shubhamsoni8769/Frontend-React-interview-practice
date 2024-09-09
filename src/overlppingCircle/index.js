import { useEffect, useState } from "react";
const RADIUS = 50;


const OverlapingCircle = () => {
    const [circles, setCircles] = useState([]);
    const addCircle = (e) => {
        const {clientX, clientY} = e;
        const newCirclecord = {
            x: clientX - RADIUS,
            y: clientY - RADIUS,
            background: "red"
        }
        console.log(newCirclecord)

        setCircles((prev) => {
            for(let i=0; i< prev.length; i++) {
                if(checkOverlap( newCirclecord, prev[i])) {
                    newCirclecord.background = "green";
                    break;
                }
            }
            return [...prev, newCirclecord]
        }) 
    }

    const checkOverlap = (circle1, circle2) => {
        const distance = Math.sqrt(
          Math.pow(circle2.x - circle1.x, 2) + Math.pow(circle2.y - circle1.y, 2)
        );
        return distance < (RADIUS * 2);
      };

    useEffect(() => {
        window.addEventListener("click", addCircle)

        return () => window.removeEventListener("click", addCircle)

    }, [])
    return (
        <div style={{width: "100vw", height: "100vh"}}>
        OverlapingCircle
        {circles.map(circle => <Circle {...circle} key={circle.x + circle.y}/>)}
        </div>
    )

}

const Circle = ({x,y, background}) => {
    return (
        <div 
        style={{position: "absolute", width: RADIUS *2, height: RADIUS * 2 , borderRadius: "50%", top: y , left: x , background}}>

        </div>
    )
}
export default OverlapingCircle;