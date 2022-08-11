//export default keypad = ()=>{


export default function keyPad() {

    let result = props;
       
           
        return(
            <div>
                 <div className="result">
                <p>result</p>
            </div>
            <div className="button">
                <button name="(">(</button>
                <button name="CE">CE</button>
                <button name=")">)</button>
                <button name="C">C</button><br/>

                <button name="9">9</button>
                <button name="8">8</button>
                <button name="7">7</button>
                <button name="+">+</button><br/>

                <button name="6">6</button>
                <button name="5">5</button>
                <button name="4">4</button>
                <button name="-">-</button><br/>

                <button name="3">3</button>
                <button name="2">2</button>
                <button name="1">1</button>
                <button name="*">*</button><br/>

                <button name="0">0</button>
                <button name=".">.</button>
                <button name="=">=</button>
                <button name="%">%</button><br/>

            </div>

             <style jsx>{`
             button {

                height:75px;
                width:75px;
           }
       
             `}</style>
             </div>
        );
        
    
}
